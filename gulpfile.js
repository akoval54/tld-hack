var gulp = require('gulp');
var gzip = require('gulp-gzip');

gulp.task('compress', () => {
  gulp.src(['./dist/**/*.*'])
    .pipe(gzip())
    .pipe(gulp.dest('./dist'));
});
