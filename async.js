#!/usr/bin/env node
'use strict';

const fs = require('fs');

const [,,filePath] = process.argv;

const writeFile = () => {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    process.stdout.write(data + '\n');
  });
}

// exit if no argument passed in
if  (!filePath) {
  process.exit();
} else { 
  writeFile();
}   
