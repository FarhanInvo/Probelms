const fs = require('fs')
const os = require('os')

fs.writeFileSync("read.txt",'welcome to page');

fs.appendFileSync('read.txt',os.arch());
fs.appendFileSync('read.txt',os.hostname());
fs.appendFileSync('read.txt',os.platform());
fs.appendFileSync('read.txt',os.tmpdir());
fs.appendFileSync('read.txt',os.type());

