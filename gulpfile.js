var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var watch = require('gulp-watch');
var pug = require('gulp-pug-3');
const formatHtml = require('gulp-format-html')
const imagemin = require('gulp-imagemin');

gulp.task('pug', function() {
  return gulp.src('app/pug/index.pug') 
    .pipe(pug())
    .pipe(gulp.dest('app/page'))
});

gulp.task('sass', function() {
    return gulp.src('app/scss/style.scss') 
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
});

gulp.task('views', function() {
  return gulp
    .src('app/page/**/*.html')
    .pipe(formatHtml())
    .pipe(gulp.dest('dist'))
});

gulp.task('images',function(){
  gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
});
exports.watch = function () {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('app/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('app/page/**/*.html', gulp.series('views'));
    gulp.watch('app/images/**/*.+(png|jpg|gif|svg)', gulp.series('images'));
};