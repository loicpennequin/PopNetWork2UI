'use strict';

const gulp = require('gulp');
const path = require('path');
const cfg  = require(path.join(__dirname, '../config.js'));

gulp.task('watch', () => {
    gulp.watch([
        path.join(cfg.paths.base.src, '**/*.html'),
    ], ['rt']);
    gulp.watch([
        path.join(cfg.paths.base.src, '**/*.sass'),
        path.join(cfg.paths.base.src, '**/*.scss'),
    ], ['stream']);
})
