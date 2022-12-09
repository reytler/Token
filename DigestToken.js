function digestToken(token,_getVector,base,senha){
    vector = _getVector(token)
    digest = ''
    for(var i=0; i < vector.length;i++){
        digest += base[vector[i]]
    }
    temp = digest.split(' ')

    let content = temp[0];
    let pass = temp[1];
    let valit = temp[2];

    if(senha != pass){
        return{
            "success": false,
            "content": 'Token Inválido'
        } 
    }

    if(valit - Math.round(Date.now()/1000) < 0){
        return {
            "success": false,
            "content": 'Token Expirado'
        }
    }

    return {
        "success": true,
        "content": content
    };
}

module.exports = digestToken