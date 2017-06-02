var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    del = require('del'),
    svg2png = require('gulp-svg2png'),
    rename = require('gulp-rename');

var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  variables: {
    replaceSvgWithPng: function() {
      return function(sprite, render) {
        return render(sprite).split('.svg').join('.png');
      };
    }
  },
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprites.css'
        }
      }
    }
  }
};

gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite',['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('createPngCopy',['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic',['createPngCopy'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
    .pipe(gulp.dest('./app/assets/images/sprites/'));
});

gulp.task('copySpriteCSS',['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/sprite.css')
    .pipe(rename('_sprites.css'))
    .pipe(gulp.dest('./app/assets/styles/modules/'));
});

gulp.task('endClean',['copySpriteCSS', 'copySpriteGraphic'], function() {
  return del('./app/temp/sprite');
});

gulp.task('sprites', ['endClean']);