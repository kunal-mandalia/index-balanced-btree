"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helper");
var IndexBalancedBTree = /** @class */ (function () {
    function IndexBalancedBTree(inputArray) {
        this.input = inputArray;
        this.height = this.getHeight(inputArray.length);
        this.tree = IndexBalancedBTree.generateTree(this.input, this.height);
        this.index = this.getRootIndex();
    }
    IndexBalancedBTree.generateTree = function (inputArray, height) {
        var tree = [];
        for (var h = height; h > 0; h--) {
            var maximumElementsInRank = Math.pow(2, h - 1);
            tree.push(Array(maximumElementsInRank));
        }
        for (var i = 0; i < inputArray.length; i++) {
            var _a = IndexBalancedBTree.getTreeIndexByArrayIndex(i), row = _a.row, col = _a.col;
            tree[row][col] = {
                arrayIndex: i,
                data: inputArray[i]
            };
        }
        return tree;
    };
    /**
     * Obtains the row and col index based on the solution
     * of the equation T(row, col) = (2^row)(2col + 1) - 1 = arrayIndex
     */
    IndexBalancedBTree.getTreeIndexByArrayIndex = function (arrayIndex) {
        var row = helper_1.getDivisibleMultiples(arrayIndex + 1, 2);
        var col = (((arrayIndex + 1) / Math.pow(2, row)) - 1) / 2;
        return { row: row, col: col };
    };
    IndexBalancedBTree.print = function (tree, log) {
        if (log === void 0) { log = console.log; }
        var output = "";
        var getLeftIndentation = function (rowIndex) { return Array(Math.pow(2, rowIndex - 1)).join(' '); };
        var getGapSizeBetweenNodes = function (rowIndex) { return Array(Math.pow(2, rowIndex)).join(' '); };
        for (var rowIndex = tree.length; rowIndex > 0; rowIndex--) {
            var leftIndent = getLeftIndentation(rowIndex);
            var gap = getGapSizeBetweenNodes(rowIndex);
            var nodes = tree[rowIndex - 1]
                .filter(function (node) { return helper_1.isInteger(node.arrayIndex); })
                .map(function (node) { return node.arrayIndex; }).join(gap);
            var row = "" + leftIndent + nodes;
            output = output + "\n" + row;
        }
        log(output);
    };
    IndexBalancedBTree.prototype.getHeight = function (numNodes) {
        var height = 0;
        while (true) {
            if (numNodes >= Math.pow(2, height)) {
                height += 1;
            }
            else {
                return height;
            }
        }
    };
    IndexBalancedBTree.prototype.setIndex = function (nodeIndex) {
        this.index = nodeIndex;
    };
    IndexBalancedBTree.prototype.getRootIndex = function () {
        return { row: this.height - 1, col: 0 };
    };
    IndexBalancedBTree.prototype.getParentIndex = function () {
        var row, col;
        var noParent = this.index.row + 1 >= this.height;
        if (noParent)
            return null;
        row = this.index.row + 1;
        col = Math.ceil((this.index.col - 1) / 2);
        return { row: row, col: col };
    };
    /**
     *
     * @param {String} direction "left", "right"
     * @returns {Object} { row: integer, col: integer }
     */
    IndexBalancedBTree.prototype.getChildIndex = function (direction) {
        var row, col;
        var noChild = this.index.row === 0;
        if (noChild)
            return null;
        row = this.index.row - 1;
        col = direction === "left" ?
            (2 * this.index.col) :
            (2 * this.index.col) + 1;
        return { row: row, col: col };
    };
    return IndexBalancedBTree;
}());
exports.IndexBalancedBTree = IndexBalancedBTree;
