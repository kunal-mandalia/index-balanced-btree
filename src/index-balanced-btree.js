function isEven(n = 0) {
  return n % 2 === 0
}

function getDivisibleMultiples(n = 0, m = 0) {
  let multiple = 0

  while (true) {
    const denominator = Math.pow(m,multiple)
    const isDivisible = n % denominator === 0
    if (isDivisible) {
      multiple += 1
    } else {
      return multiple - 1
    }
  }
}

class IndexBalancedBTree {
  /**
   * 
   * @param {Array} inputArray 
   * @param {Number} height : integer
   * @returns {Array} array of array
   */
  static generateTree(inputArray = [], height = 0) {
    let tree = []
    
    for (let h=height; h > 0; h--) {
      const maximumElementsInRank = Math.pow(2, h-1)
      tree.push(Array(maximumElementsInRank))
    }
    
    for (let i=0; i < inputArray.length; i++) {
      const { row, col } = IndexBalancedBTree.getTreeIndexByArrayIndex(i)
      tree[row][col] = {
        arrayIndex: i,
        data: inputArray[i]
      }
    }
    return tree
  }

  /**
   * Obtains the row and col index based on the solution
   * of the equation T(row, col) = (2^row)(2col + 1) - 1 = arrayIndex
   * 
   * @param {Number} arrayIndex zero based index
   * position of element in input array
   * @returns {Number} integer
   */
  static getTreeIndexByArrayIndex(arrayIndex = []) {
    const row = getDivisibleMultiples(arrayIndex + 1, 2)
    const col = (((arrayIndex + 1) / Math.pow(2, row)) - 1) / 2
    return { row, col }
  }

  constructor (inputArray = []) {
    this.input = inputArray
    this.height = this.getHeight(inputArray.length)
    this.tree = IndexBalancedBTree.generateTree(this.input, this.height)
  }

  /**
   * 
   * @param {Number} N integer. Total nodes.
   */
  getHeight(N = 0) {
    let height = 0

    while (true) {
      if (N >= Math.pow(2, height)) {
        height += 1
      } else {
        return height
      }
    }
  }
}

module.exports = {
  IndexBalancedBTree,
  getDivisibleMultiples
}