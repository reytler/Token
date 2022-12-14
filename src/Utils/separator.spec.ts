import {_getSeparator} from './Separator'

describe('Teste GetSeparator',() => {
  test('Deve retornar uma letra maiúscula', () => {
    const base = 'qwertyuiopasdfghjklc'
    let result = _getSeparator(base)
    expect(result).toMatch(/[A-Z]/)
  })

  test('Deve ser lançada uma exceção', () => {
    const base = 'qwertyuiopasdfghjkl'
    expect(_getSeparator).toThrow()
  })
})
