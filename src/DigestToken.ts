type feedbackToken = {
    success: boolean,
    content: string
}

export function digestToken(token: string, _getVector:(token: string)=>string[], base: string, senha: string): feedbackToken{
    let vector: any = _getVector(token)
    let digest: string = ''

    for(var i: number = 0; i < vector.length;i++){
        digest += base[vector[i]]
    }

    let temp: string[] = digest.split(' ')

    let content: string = temp[0];
    let pass: string = temp[1];
    let valit: number = parseInt(temp[2]);

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