const { util } = require('../src');

console.clear();

try {
    console.log(`util.border(1, '~')`);
    console.log(util.border(1, '~'));

    console.log(`util.border(2, '~')`);
    console.log(util.border(2, '~'));

    console.log(`util.border(3, '~')`);
    console.log(util.border(3, '~'));

    console.log(`util.border(4, '~')`);
    console.log(util.border(4, '~'));

    console.log(`util.border(5, '~')`);
    console.log(util.border(5, '~'));

} catch(e) {
    console.error(e.message);
    process.exit(1);
}

try {

    console.log(`util.terminalBorder()`);
    console.log(util.terminalBorder());

    console.log(`util.terminalBorder('/')`);
    console.log(util.terminalBorder('/'));

} catch(e) {
    console.error(e.message);
    process.exit(1);
}

process.exit(0);