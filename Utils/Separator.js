function _getSeparator(baseSeparator){
    position = Math.floor(Math.random() * 20);
    separator = baseSeparator[position]
    return separator.toUpperCase();     
}

module.exports = _getSeparator