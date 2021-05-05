var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

sass.compiler = require("node-sass")

function compilaSass () {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}
function watch() {
  browserSync.init({
    server: {
      baseDir: 'src/'
    }
  });
  gulp.watch('src/styles/*.scss', compilaSass)
  gulp.watch('src/*.html').on('change', browserSync.reload)
  gulp.watch('src/*.js').on('change', browserSync.reload)
}

exports.compilaSass = compilaSass;
exports.watch = watch;