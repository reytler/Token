import { createToken } from "./CreateToken"
import {_getSeparator} from "./Utils/Separator"

const base = ' -abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const baseSeparator = 'abcdefghijklmnopqrstuvwxyz'
const senha = 'S'
const payload = 'R'

describe('Teste createToken',() => {
  test('Deve retornar um token', () => {
    const result = createToken(payload,senha,base,baseSeparator,_getSeparator)
    expect(result).toMatch(/[A-Z0-9]/)
  })
})
