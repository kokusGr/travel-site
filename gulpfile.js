var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
});

watch()