export function getDivisibleMultiples(n = 0, m = 0) {
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

export function isInteger (value) {
  return typeof value === 'number' && 
    isFinite(value) && 
    Math.floor(value) === value;
};