
exports.border = (borderWidth = 100, borderCharacter = '=') => {
    const length = borderWidth / borderCharacter.length;
    return new Array(length).fill(borderCharacter).join('');
}

exports.terminalBorder = (borderCharacter = '=') => {
    return exports.border(process.stdout.columns, borderCharacter);
}