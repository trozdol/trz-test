#!/usr/bin/env node
const { terminalBorder, border } = require('../src/util');

exports.help = exports.h = function help () {console.log(`

HELP:
${terminalBorder('-')}

    --help, -h      this is all it does

    npx . --help

    npm i -g trz-test
    
    trz-test --help

${terminalBorder('.')}
`)}

console.log(terminalBorder('='));
console.log('CLI');
console.log(terminalBorder('='));
console.log('arguments:');
console.log(terminalBorder('-'));

process.argv.forEach((arg, argIndex) => {
    if (argIndex <= 1) return;
    console.log('arg:', argIndex, arg);
    const fnName = arg.replaceAll('-', '');
    try {
        exports[fnName].call(this, []);
        console.log('EXIT');
        process.exit(0);
    } catch (e) {
        console.log('EXIT', e.message);
        process.exit(1);
    }
});
