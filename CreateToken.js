
function createToken(codigo,senha, base, baseSeparator,_getSeparator){

    let emissao = Math.round(Date.now()/1000);
    let validade = emissao + 10800

    let result = codigo+' '+senha+' '+validade;

    let newResult = ''

    for(var i=0; i < result.length;i++){
        newResult += base.indexOf(result[i]) + _getSeparator(baseSeparator);
    }

    result = newResult

    return result
}

module.exports = createToken