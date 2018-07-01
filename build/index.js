'use strict';

const fs = require('fs');

const TASKS = fs.readdirSync('./build/tasks')

TASKS.forEach(function(task) {
  require('./tasks/' + task);
});
