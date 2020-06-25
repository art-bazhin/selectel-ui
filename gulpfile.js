const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

function build() {
  return src('src/main.scss')
    .pipe(sass())
    .pipe(postcss())
    .pipe(rename('selectel-ui.css'))
    .pipe(dest('dist'));
}

function dev() {
  return watch('src/**/*.scss', build);
}

exports.default = build;
exports.build = build;
exports.dev = dev;
