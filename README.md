# Token
O repositório pode ser utilizado como um submódulo para codificação e decodificação de tokens para a web.

O módulo pode ser utilizado importando a função Handle do diretório "~/Token/src": Utiliza-se Handle(option: number,payload: string), onde option=1 codifica e retorna o token e option=2 decodifica e retorna o payload enviado se o token não estiver expirado e se a senha contida no token for válida.

Gerando o token
Ex.: Handle(1,"Reytler-ADMIN") retorna algo como: "55H6I26S21P13R6P19K1F50N2G21R9K6B22C20Q0T41O6E23O30E33O30M31A29K36H0L29G34E35L28C34G31S30G29I31R30C"

Decodificando o token
Ex.: Handle(2,"55H6I26S21P13R6P19K1F50N2G21R9K6B22C20Q0T41O6E23O30E33O30M31A29K36H0L29G34E35L28C34G31S30G29I31R30C") retorna algo como "Reytler-ADMIN"
