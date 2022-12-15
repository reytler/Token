import { _getVector } from './Vector'

describe('Test getVector',() => {
  test('Deve retornar um array de strings', () => {
    const mock='1S2D3D4F5G6H7J8'
    let result = _getVector(mock)
    expect(result).toStrictEqual(["1", "2", "3", "4", "5", "6", "7"])
  })

  test('Deve retornar um array vazio', () => {
    const mock='1234567'
    let result = _getVector(mock)
    expect(result).toStrictEqual([])
  })
})
