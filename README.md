# index-balanced-btree [![CircleCI](https://circleci.com/gh/kunal-mandalia/index-balanced-btree.svg?style=svg)](https://circleci.com/gh/kunal-mandalia/index-balanced-btree)
A balanced Binary Search Tree using Indexes instead of Nodes

## Motivation

A naive approach for generating a binary search tree (BST) given an array of records is to take the first element from the records and assign it as the root node. The next element will either be less than the root and be assigned the left child or greater than the root and assigned the right child node.

Using this approach, given a sorted array the BST will be lopsided since subsequent items taken from the sorted array is greater than the prior. The result is a degenerate BST. This is undesirable as search performance of this data structure is `O(n)` compared to a search performance of `O(log(n))` of a perfectly balanced BST.

This project shows how to formulaically generate a perfectly balanced BST given a sorted array as input.

## Get started

* Install: `yarn add index-balanced-btree`
* Initialise and use a new tree:
```js
  const Tree = require('index-balanced-btree').IndexBalancedBTree

  const sortedRecords = ["Andy", "Brie", "Carl", "Dennis", "Ed", "Fran", "Gary"]
  const myTree = new Tree(sortedRecords)

  // Get child node index
  const leftChild = myTree.getChildIndex("left") // { row: 1, col: 0 }

  // Log the tree!
  Tree.print(myTree.tree)

     3
   1   5
  0 2 4 6
```

## Limitations

The benefit of index balanced BST over existing data structures (arrays, self balancing trees; AVL, Red/Black) lies in being able to jump to a node without having to traverse intermediate nodes. Practically however this data structure is less efficient than a sorted array for searching and doesn't have insertion / deletion algorithms.