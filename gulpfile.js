const { src, dest, watch, series, parallel } = require("gulp");
const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const terser = require("gulp-terser");
const notify = require("gulp-notify");
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

const sass = gulpSass(dartSass);

// Webpack
const webpack = require("webpack-stream");

const paths = {
  scss: "src/scss/**/*.scss",
  js: "src/js/app.js",
  imagenes: "src/img/**/*",
};

function css(done) {
  src(paths.scss, { sourcemaps: true })
    .pipe(sass({ outputStyle: "compressed" }))
    .on("error", sass.logError)
    .pipe(dest("./public/build/css", { sourcemaps: "." }));
  done();
}

function js(done) {
  src(paths.js)
    .pipe(
      webpack({
        mode: "production",
        entry: {
          bundle: "./src/js/app.js",
        },
        output: {
          filename: "app.js",
        },
        watch: true,
      })
    )
    .pipe(
      terser({
        ecma: 2020,
        module: true,
        toplevel: true,
      })
    )
    .pipe(dest("./public/build/js"));
  done();
}

function imagenes() {
  return src(paths.imagenes)
    .pipe(cache(imagemin({ optimizationLevel: 3 })))
    .pipe(dest("./public/build/img"));
}

function versionWebp(done) {
  const opciones = {
    quality: 70,
  };
  return src("src/img/**/*.{png,jpg,jpeg}")
    .pipe(webp(opciones))
    .pipe(dest("./public/build/img"))
    .pipe(notify({ message: "Imagen WebP creada: <%= file.relative %>" })); // Añadimos notificación para depurar

  done();
}

function buildInitial(done) {
  css(done);
  js(done);
  // imagenes();
  // versionWebp();
  done();
}

function dev() {
  watch(paths.scss, css);
  watch(paths.js, js);
  // watch(paths.imagenes, imagenes);
  // watch(paths.imagenes, versionWebp);
}

exports.css = css;
exports.js = js;
// exports.imagenes = imagenes;
// exports.versionWebp = versionWebp;
exports.dev = series(buildInitial, dev); // Primero construye todo, luego inicia modo dev
exports.default = series(buildInitial, dev); // Igual que dev
exports.build = parallel(css, js); // Para construir todo sin iniciar modo dev
