"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDivisibleMultiples(n, m) {
    if (n === void 0) { n = 0; }
    if (m === void 0) { m = 0; }
    var multiple = 0;
    while (true) {
        var denominator = Math.pow(m, multiple);
        var isDivisible = n % denominator === 0;
        if (isDivisible) {
            multiple += 1;
        }
        else {
            return multiple - 1;
        }
    }
}
exports.getDivisibleMultiples = getDivisibleMultiples;
