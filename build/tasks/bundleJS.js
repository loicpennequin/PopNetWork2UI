'use strict';

const gulp          = require('gulp');
const runSequence   = require('run-sequence').use(gulp);


gulp.task('bundleJS', cb => runSequence('rt', 'browserify', 'reload', cb));
