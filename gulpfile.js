const { src, dest, watch, series, parallel } = require("gulp");
const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");

const sass = gulpSass(dartSass);

// Webpack
const webpack = require("webpack-stream");

let isProduction = false;

const paths = {
  scss: "src/scss/**/*.scss",
  js: "src/js/**/*.js",
};

function css() {
  const plugins = [
    autoprefixer({ overrideBrowserslist: ["last 2 versions"] }),
    cssnano(),
  ];

  return src(paths.scss, { sourcemaps: true })
    .pipe(sass({ outputStyle: "compressed" }))
    .on("error", sass.logError)
    .pipe(postcss(plugins))
    .pipe(dest("./public/build/css", { sourcemaps: "." }));
  // done();
}

function js() {
  return src(paths.js)
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
          ],
        },
        mode: isProduction ? "production" : "development",
        entry: "./src/js/app.js",
        output: {
          filename: isProduction ? "app.min.js" : "app.js",
        },
        watch: !isProduction,
        devtool: isProduction ? false : "source-map",
        optimization: {
          minimize: isProduction,
        },
      })
    )
    .pipe(dest("./public/build/js"));
}

function copyStatic(done) {
  return src("*.html").pipe(dest("./public"));
}

function buildInitial(done) {
  isProduction = false; // Cambia a modo desarrollo
  return parallel(css, js, copyStatic)(done);
}

function dev() {
  isProduction = false; // Cambia a modo desarrollo
  watch(paths.scss, css);
  watch(paths.js, js);
  console.log("Observando cambios en SCSS y JS...");
}

function buildProduction(done) {
  isProduction = true; // Cambia a modo producción
  return parallel(css, js, copyStatic)(done);
}

function vercelBuild(done) {
  isProduction = true; // Cambia a modo producción
  return parallel(css, js, copyStatic)(done);
}

exports.css = css;
exports.js = js;
exports.dev = series(buildInitial, (cb) => {
  dev();
}); // Primero construye todo, luego inicia modo dev
exports.default = exports.dev; // Igual que dev
exports.build = buildProduction; // Para construir todo sin iniciar modo dev
exports.vercel = vercelBuild; // Build para Vercel
