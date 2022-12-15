import { createToken } from "./CreateToken"
import { _getSeparator } from "./Utils/Separator"
import { _getVector } from "./Utils/Vector"
import { digestToken } from "./DigestToken"

const base = ' -abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const baseSeparator = 'abcdefghijklmnopqrstuvwxyz'
const senha = 'S'
const payload = 'R'

describe('Test digestToken',() => {
  test('Deve retornar dados do token', () => {
    const resultToken = createToken(payload,senha,base,baseSeparator,_getSeparator)

    const resultDigest = digestToken(resultToken,_getVector,base,senha)

    expect(resultDigest.content).toStrictEqual(payload)
  })

  test('Deve retornar "Token Inválido" ', () => {
    const passForError = 'SenhaErrada'
    const resultToken = createToken(payload,senha,base,baseSeparator,_getSeparator)

    const resultDigest = digestToken(resultToken,_getVector,base,passForError)

    expect(resultDigest.content).toStrictEqual('Token Inválido')
  })
})
