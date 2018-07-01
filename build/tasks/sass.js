'use strict';

const gulp              = require('gulp');
const sass              = require('gulp-sass');
const concat            = require('gulp-concat');
const sourcemaps        = require('gulp-sourcemaps');
const autoprefixer      = require('gulp-autoprefixer');
const rename            = require('gulp-rename');
const runSequence       = require('run-sequence').use(gulp);
const notifier          = require('node-notifier');
const path              = require('path');
const cfg               = require(path.join(__dirname, '../config.js'));
const logger            = require(path.join(__dirname, '../log.js'));

gulp.task('sass', () =>
    gulp
        .src(cfg.paths.css.src)
        .pipe(sass())
        .on('error', function(err){
            logger.error(err);
            notifier.notify({
                title: 'SASS Error',
                message: err.message,
                timeout: 5
            });
            this.emit('end');
        })
        .pipe(concat(cfg.paths.css.outputName))
        .pipe(autoprefixer())
        .pipe(gulp.dest(cfg.paths.css.dst))
);

gulp.task('bundleCSS', (cb) => {
    runSequence('sass', 'stream', cb);
})
