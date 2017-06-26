// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
  watch = require('gulp-watch');
 

gulp.task('sass', function() {
    gulp.src('*.sass')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
;
gulp.task('default', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
})
})

gulp.task('default', ['sass'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); 
})


