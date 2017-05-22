var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
});

watch('./app/assets/styles/**/*.css', function () {
  gulp.start('styles');
})