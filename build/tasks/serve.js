'use strict';

const gulp          = require( 'gulp' );
const browserSync   = require( 'browser-sync' ).create();
const path          = require( 'path' );
const cfg           = require( path.join( __dirname, '../config.js' ) );
const spa           = require( 'connect-history-api-fallback' );

gulp.task( 'serve', () =>
    browserSync.init( {
        server: {
            baseDir: "./dist/",
            middleware: [
                spa()
            ]
        },
        reloadDelay: 1000
    } )
);

gulp.task( 'reload', done => {
    browserSync.reload();
    done();
} );

gulp.task( 'stream', [ 'sass' ], done => {
    browserSync.reload( cfg.paths.css.outputName );
    done();
} );

module.exports = browserSync;
