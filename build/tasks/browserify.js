'use strict';

const gulp          = require('gulp');
const source        = require('vinyl-source-stream');
const buffer        = require('vinyl-buffer');
const sourcemaps    = require('gulp-sourcemaps');
const browserify    = require('browserify');
const babelify      = require('babelify');
const watchify      = require('watchify');
const uglify        = require('gulp-uglify');
const notify        = require('gulp-notify');
const notifier      = require('node-notifier');
const path          = require('path');
const cfg           = require(path.join(__dirname, '../config.js'));
const logger        = require(path.join(__dirname, '../log.js'));
const opts          = cfg.bundle.options;
const browserSync   = require(path.join(__dirname, 'serve.js'));

let _onError = (err) => {
    logger.error(err.message);
    notifier.notify({
        title: 'Browserify Compile Error',
        message: err.message,
        timeout: 5,
        icon: path.join(__dirname, "../notification_error.png")
    });
}

let _bundleJS = (watch) => {
    let bundler = watch ?
        watchify(browserify(cfg.paths.js.src, opts)) :
        browserify(cfg.paths.js.src, opts);

    let rebundle = () =>
        bundler
        .bundle()
        .on('error', function (err) {
            _onError(err);
            this.emit('end');
        })
        .pipe(source(cfg.paths.js.outputName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true, largeFile: true }))
        // .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(cfg.paths.js.dst))
        .pipe(notify({
            title: "Browserify",
            message: "Compiled successfully",
            onLast: true,
            icon: path.join(__dirname, "../notification_success.png"),
            sound: false
        }))

    bundler.on('update', () => {
        rebundle();
        browserSync.reload();
    });

    return rebundle();
}

gulp.task("browserify", () => _bundleJS(true));
