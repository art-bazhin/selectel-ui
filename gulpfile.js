const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');

function ui() {
  return src('src/main.scss')
    .pipe(sass())
    .pipe(postcss())
    .pipe(rename('selectel-ui.css'))
    .pipe(dest('dist'));
}

function utils() {
  return src('src/common/scss/utils.scss')
    .pipe(sass())
    .pipe(postcss())
    .pipe(rename('utils.css'))
    .pipe(dest('dist'));
}

const build = parallel(ui, utils);

function dev() {
  return watch('src/**/*.scss', build);
}

function serve() {
  browserSync.init({
    files: ['./dist'],
    watch: true,
    proxy: 'localhost:6006',
  });
}

exports.default = build;
exports.build = build;
exports.dev = dev;
exports.serve = serve;
