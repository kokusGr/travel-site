var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssAutoprefixer = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    cssNested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    cssMixins = require('postcss-mixins');

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssVars, cssMixins, cssNested, cssAutoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end')
    })
    .pipe(gulp.dest('./app/temp/styles'));
});

