//recursive
function factorial_recursive(x) {
    if (x == 1) {
      return 1
    } else {
      return x * factorial_recursive(x - 1)
    }
}
console.log(factorial_recursive(10))
  
  
//iterative 
function factorial_iterative(x) {
    var r = 1
    if (x > 0) {
      for (let i = 1; i < x + 1; i++) {
        r *= i
      }
    }
    return r
}
console.log(factorial_iterative(10))