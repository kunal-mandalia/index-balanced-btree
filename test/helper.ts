import { getDivisibleMultiples } from '../src/helper'

describe('getDivisibleMultiples(n, m)', () => {
  // assign
  const cases = [
    { n: 4, m: 2, expectedResult: 2 },
    { n: 4, m: 4, expectedResult: 1 },
    { n: 12, m: 2, expectedResult: 2 },
    { n: 22, m: 2, expectedResult: 1 },
  ]

  cases.forEach(c => {
    it(`should return ${c.expectedResult} given n,m: ${c.n}, ${c.m}`, () => {
      // act
      const result = getDivisibleMultiples(c.n,c.m)
      // assert
      expect(result).toEqual(c.expectedResult)
    })
  })
})