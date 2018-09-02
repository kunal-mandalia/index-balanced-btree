# index-balanced-btree [![CircleCI](https://circleci.com/gh/kunal-mandalia/index-balanced-btree.svg?style=svg)](https://circleci.com/gh/kunal-mandalia/index-balanced-btree)
A balanced Binary Search Tree using Indexes instead of Nodes

## Motivation

A naive approach for generating a binary search tree (BST) given an array of records is to take the first element from the records and assign it as the root node. The next element will either be less than the root and be assigned the left child or greater than the root and assigned the right child node.

Using this approach, given a sorted array the BST will be lopsided since subsequent items taken from the sorted array is greater than the prior. The result is a degenerate BST. This is undesirable as search performance of this data structure is `O(n)` compared to a search performance of `O(log(n))` of a perfectly balanced BST.

This project shows how to formulaically generate a perfectly balanced BST given a sorted array as input.

## Get started

* Install: `yarn add index-balanced-btree`
* Import: `const Tree = require('index-balanced-btree')`
* Initialise a new tree: `const myTree = new Tree([ { id: '001', name: 'Andy' }, ... ])`
* Log the tree! Tree.print(myTree.tree)
```
   3
 1   5
0 2 4 6
```


## Limitations

The index balanced BST data structure is less efficient than the sorted array for searching. Insertion and deletion algorithms are yet to be developed, but even so they won't compare to AVL / red black trees.