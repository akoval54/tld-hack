var gulp = require('gulp');
var gzip = require('gulp-gzip');
var zip = require('gulp-zip');

gulp.task('compress-files', () => {
  gulp.src(['./dist/**/*.*'])
    .pipe(gzip())
    .pipe(gulp.dest('./dist'));
});

gulp.task('compress-dist', () => {
  gulp.src(['./dist/domains/**'])
    .pipe(zip('domains.zip'))
    .pipe(gulp.dest('./dist'));
});
