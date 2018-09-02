const {
  IndexBalancedBTree,
  getDivisibleMultiples
} = require('../src/index-balanced-btree.js')
const sortedArrays = require('../test/__fixtures__/sortedArrays.js')
const treeLogs = require('../test/__fixtures__/treeLogs')

describe('Index balanced binary (search) tree', () => {
  let tree

  beforeEach(() => {
    tree = new IndexBalancedBTree(sortedArrays.sortedArray6)
  })

  describe('getHeight(N)', () => {
    it('should return the height of the tree based on number of nodes', () => {
      // assign
      const cases = [
        { N: 1, expectedHeight: 1 },
        { N: 3, expectedHeight: 2 },
        { N: 7, expectedHeight: 3 },
        { N: 8, expectedHeight: 4 },
        { N: 12, expectedHeight: 4 },
      ]

      cases.forEach(c => {
        // act
        const height = tree.getHeight(c.N)
        // assert
        expect(height).toEqual(c.expectedHeight)
      })
    })
  })

  describe('getTreeIndexByArrayIndex(arrayIndex)', () => {
    // assign
    const cases = [
      { arrayIndex: 0, expectedResult: { row: 0, col: 0 }},
      { arrayIndex: 1, expectedResult: { row: 1, col: 0 }},
      { arrayIndex: 2, expectedResult: { row: 0, col: 1 }},
      { arrayIndex: 3, expectedResult: { row: 2, col: 0 }}
    ]

    cases.forEach(c => {
      it(`should return ${JSON.stringify(c.expectedResult)} given arrayIndex ${c.arrayIndex}`, () => {
        // act
        const result = IndexBalancedBTree.getTreeIndexByArrayIndex(c.arrayIndex)
        // assert
        expect(result).toEqual(c.expectedResult)
      })
    })
  })

  describe('generateTree(inputArray, height)', () => {
    it('should return an index balanced binary search tree', () => {
      // assign
      const height = 3
      const expectedResult = [
        [
          { arrayIndex: 0, data: { id: "001", name: "Alice"}},
          { arrayIndex: 2, data: { id: "003", name: "Carl"}},
          { arrayIndex: 4, data: { id: "005", name: "Eric"}},
          { arrayIndex: 6, data: { id: "007", name: "Gary"}},
        ],
        [
          { arrayIndex: 1, data: { id: "002", name: "Bob"}},
          { arrayIndex: 5, data: { id: "006", name: "Frank"}},
        ],
        [
          { arrayIndex: 3, data: { id: "004", name: "Dennis"}},
        ]
      ]
      // act
      const result = IndexBalancedBTree.generateTree(sortedArrays.sortedArray7, 3)
      // assert
      expect(result).toMatchObject(expectedResult)
    })
  })

  describe('rootNodeIndex()', () => {
    it.skip('should return the index {row, column} position of root node', () => {})
  })

  describe('cursor(index)', () => {
    it.skip('should set active node', () => {})
  })

  describe('parentNodeIndex()', () => {
    it.skip('should return the index of parent node if it exists', () => {})
  })

  describe('childNodeIndex(direction)', () => {
    it.skip('should return left child node index', () => {})
    it.skip('should return right child node index', () => {})
  })

  describe('print(tree, log)', () => {
    let mockConsole = jest.fn()
    afterEach(() => {
      mockConsole.mockClear()
    })

    const cases = [
      { inputArray: sortedArrays.sortedArray2, expectedResult: treeLogs.tree2 },
      { inputArray: sortedArrays.sortedArray6, expectedResult: treeLogs.tree6 },
      { inputArray: sortedArrays.sortedArray7, expectedResult: treeLogs.tree7 },
      { inputArray: sortedArrays.sortedArray10, expectedResult: treeLogs.tree10 }
    ]

    cases.forEach((c, i) => {
      it(`it should return correct tree log for case ${i}`, () => {
        // assign
        const { tree } = new IndexBalancedBTree(c.inputArray)
        IndexBalancedBTree.print(tree, mockConsole)
        // assert
        expect(mockConsole).toBeCalledWith(c.expectedResult)
      })
    })
  })
})

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