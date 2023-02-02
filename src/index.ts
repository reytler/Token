/*BEGIN CONFIG*/
    //OBS.: Não deve-se inserir espaço na string de informações, isso inválidará o token, deve-se separar cada informação por ífen(-).
const base: string = ' -abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Padrão utilizado para obter posições de cada item da string de informações
const senha: string = 'SUASENHAAQUI'; // Senha para proteção e integridade do Token
const baseSeparator: string = 'abcdefghijklmnopqrstuvwxyz'; // Padrão para obter separadores randômicos
/*END CONFIG*/

import { createToken } from './CreateToken';
import { digestToken } from './DigestToken';
import { _getSeparator } from './Utils/Separator';
import { _getVector } from './Utils/Vector';

export function Handle(option:number, payload:string){
    if(option === 1){
        return createToken(payload,senha,base,baseSeparator,_getSeparator);
    }else{
        return digestToken(payload,_getVector,base,senha)
    }
}

/* EXEMPLO PARA UTILIZAÇÃO */
// console.log(Handle(2,'55H6I26S21P13R6P19K1F50N2G21R9K6B22C20Q0T41O6E23O30E33O30M31A29K36H0L29G34E35L28C34G31S30G29I31R30C') )
// console.log(Handle(1,'Reytler-Matheus') );