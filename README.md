# Token
O repositório pode ser utilizado como um submódulo para codificação e decodificação de tokens para a web.

O módulo pode ser utilizado importando a função Handle do diretório "~/Token/src": Utiliza-se Handle(option: number,payload: string), onde option=1 codifica e retorna o token e option=2 decodifica e retorna o payload enviado se o token não estiver expirado e se a senha contida no token for válida.
