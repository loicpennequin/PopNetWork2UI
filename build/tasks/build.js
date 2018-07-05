'use strict';

const gulp          = require('gulp');
const runSequence   = require('run-sequence').use(gulp);

const prod = process.env.NODE_ENV === 'production';

gulp.task('build-dev',cb => runSequence('clean', 'sass', 'bundleJS', 'watch', 'serve'));

gulp.task('build-prod',cb => runSequence('clean', 'sass', 'bundleJS'));

gulp.task('default', [prod ? 'build-prod' : 'build-dev']);
