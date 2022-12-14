
export function createToken(
        payload: string,senha: string, base: string, baseSeparator: string, _getSeparator: (baseSeparator: string)=>string
    ): string {

    let emissao: number = Math.round(Date.now()/1000);
    let validade: number = emissao + 10800

    let result: string = payload+' '+senha+' '+validade;

    let newResult: string = ''

    for(var i=0; i < result.length;i++){
        newResult += base.indexOf(result[i]) + _getSeparator(baseSeparator);
    }

    result = newResult

    return result
}