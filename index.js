'use strict';
require('fs').readFile('./info.json', 'utf8', (err, data) => console.log(err || data));
