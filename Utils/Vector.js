function _getVector(str){
    let vector = str.split(/[A-Z]/)
    vector.pop()
    return vector
}

module.exports = _getVector