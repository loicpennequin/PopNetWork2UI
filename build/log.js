'use strict'

const colors = require('ansi-colors');

module.exports = {
    error : message =>{
        console.error(colors.bold(colors.red('[ERROR]')), colors.red(message));
    },
    warning : message =>{
        console.log(colors.bold(colors.yellow('[WARNING')), colors.yellow(message));
    },
    info : message =>{
        console.info(colors.bold(colors.cyan('[INFO]')), colors.cyan(message));
    },
    success : message =>{
        console.error(colors.bold(colors.green('[SUCCESS]')), colors.green(message));
    },
}
