'use strict';

const gulp   = require('gulp');
const del    = require('del');
const path   = require('path');
const cfg    = require(path.join(__dirname, '../config.js'));
const logger = require(path.join(__dirname, '../log.js'));

gulp.task('clean', () =>
     del
        .sync([
            path.join(cfg.paths.js.dst, '**'),
            path.join(cfg.paths.css.dst, '**')
        ])
)
