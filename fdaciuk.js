#!/usr/bin/env node

'use strict'
const { readFile } = require('fs')

readFile('./info.json', 'utf8', (err, content) => {
  if (err) throw err
  console.log(content)
})
