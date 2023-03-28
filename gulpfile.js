const { src, dest, watch, series } = require('gulp');
// Compilar CSS
const sass = require('gulp-sass')(require('sass'));
// Imagenes
const imagemin = require('gulp-imagemin');

function css(done) {
  src('src/scss/app.scss') // Identificar el archivo principal
    .pipe(sass()) // Compilar SASS
    .pipe(dest('build/css')); // Exportarlo o guardarlo en una ubicacion

  done();
}

function dev(done) {
  watch('src/scss/**/*.scss', css);

  done();
}

function imagenes(done) {
  src('src/img/**/*')
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest('build/img'));

  done();
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series(imagenes, css, dev);
