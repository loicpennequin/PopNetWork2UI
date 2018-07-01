'use strict';

const path       = require('path');
const srcRoot    = "./src";
const dstRoot    = "./dist";

module.exports = {
    paths : {
        base: {
            src : srcRoot,
            dst : dstRoot,
        },
        css: {
            src: path.join(srcRoot, "/styles/app.sass"),
            dst: path.join(dstRoot, "/css"),
            outputName: 'styles.css'
        },
        js: {
            src: path.join(srcRoot, "/index.js"),
            dst: path.join(dstRoot, "/js"),
            outputName: 'main.js'
        }
    },
    bundle : {
        options : {
            debug: true,
            cache: {},
            packageCache: {},
            transform: [
                ['babelify', {
                    presets: ["env", "react"]
                }]
            ]
        }
    }
}
