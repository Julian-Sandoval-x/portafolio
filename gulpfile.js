const { src, dest, watch, series, parallel } = require("gulp");
const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const terser = require("gulp-terser");
const notify = require("gulp-notify");
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

const sass = gulpSass(dartSass);

const paths = {
  scss: "src/scss/**/*.scss",
  js: "src/js/**/*.js",
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
  src(paths.js).pipe(terser()).pipe(dest("./public/build/js"));
  done();
}

function imagenes() {
  return src(paths.imagenes)
    .pipe(cache(imagemin({ optimizationLevel: 3 })))
    .pipe(dest("./public/build/img"));
}

function versionWebp(done) {
  const opciones = {
    quality: 50,
  };
  return src("src/img/**/*.{png,jpg}")
    .pipe(webp(opciones))
    .pipe(dest("./public/build/img"));

  done();
}

function buildInitial(done) {
  css(done);
  js(done);
  imagenes();
  versionWebp();
  done();
}

function dev() {
  watch(paths.scss, css);
  watch(paths.js, js);
  watch(paths.imagenes, imagenes);
  watch(paths.imagenes, versionWebp);
}

exports.css = css;
exports.js = js;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = series(buildInitial, dev); // Primero construye todo, luego inicia modo dev
exports.default = series(buildInitial, dev); // Igual que dev
exports.build = parallel(css, js, imagenes, versionWebp); // Para construir todo sin iniciar modo dev
