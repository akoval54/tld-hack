var gulp = require('gulp');
var replace = require('replace-in-file');
var gzip = require('gulp-gzip');
var zip = require('gulp-zip');

gulp.task('update-version', () => {
  const date = new Date();

  replace.sync({
    files: './dist/domains/index.html',
    from: /0000.00.00/g,
    to: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
  });
});

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
