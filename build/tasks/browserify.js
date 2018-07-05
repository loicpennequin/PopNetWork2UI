'use strict';

const gulp          = require('gulp');
const source        = require('vinyl-source-stream');
const buffer        = require('vinyl-buffer');
const sourcemaps    = require('gulp-sourcemaps');
const gulpif        = require('gulp-if');
const browserify    = require('browserify');
const babelify      = require('babelify');
const watchify      = require('watchify');
const envify        = require('envify/custom');
const uglify        = require('gulp-uglify');
const notify        = require('gulp-notify');
const notifier      = require('node-notifier');
const path          = require('path');
const cfg           = require(path.join(__dirname, '../config.js'));
const logger        = require(path.join(__dirname, '../log.js'));
// const opts          = cfg.bundle.options;
const browserSync   = require(path.join(__dirname, 'serve.js'));

const prod = process.env.NODE_ENV === 'production';

const opts = {
    entries: cfg.paths.js.src,
    debug: true,
    cache: {},
    transform: [
        babelify.configure({
            presets: ["env", "react"],
            plugins: [
                "transform-class-properties",
                "transform-react-constant-elements",
                "transform-react-inline-elements",
                "transform-decorators-legacy"
            ]
        }),
        envify({global: true, NODE_ENV : prod ? 'production' : 'development'})
    ]
};

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
    let bundler = watch ? watchify(browserify(opts)) : browserify(opts);

    let rebundle = () =>
        bundler
        .bundle()
        .on('error', function (err) {
            _onError(err);
            this.emit('end');
        })
        .pipe(source(cfg.paths.js.outputName))
        .pipe(buffer())
        .pipe(gulpif(!prod, sourcemaps.init({ loadMaps: true, largeFile: true })))
        .pipe(gulpif(!prod, sourcemaps.write('./')))
        .pipe(gulpif(prod, uglify()))
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

gulp.task("browserify", () => _bundleJS(!prod));
