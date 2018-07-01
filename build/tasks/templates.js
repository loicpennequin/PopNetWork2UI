'use strict';

const gulp = require('gulp');
const path = require('path');
const cfg = require(path.join(__dirname, '../config.js'));
const rt = require('gulp-react-templates');
const logger = require(path.join(__dirname, '../log.js'));
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const notifier = require('node-notifier');
const cache = require('gulp-cached');

let _onError = (err) => {
    logger.error(err.message);
    notifier.notify({
        title: 'react-templates Compile Error',
        message: err.message,
        timeout: 5,
        icon: path.join(__dirname, "../notification_error.png")
    });
}

gulp.task('rt', () =>
    gulp
    .src(path.join(cfg.paths.base.src, '**/*.html'))
    .pipe(cache('rt'))
    .pipe(rt({ modules: 'es6' }))
    .on('error', function (err) {
        _onError(err);
        this.emit('end');
    })
    .pipe(rename( (path) => {
        path.basename = 'template.html';
        path.extname = ".js";
    }))
    .pipe(gulp.dest(cfg.paths.base.src))
);
