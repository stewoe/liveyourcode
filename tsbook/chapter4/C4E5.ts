function fib_iter(n: number): number { 
  let result = 1; 
  
  // if n==1 or n==2, the result is 1 
  // Otherwise, we need to calculate the nth number 
  if(n > 2) { 
      let nMin1 = 1; // the n-1th fibonacci number 
      let nMin2 = 1; // the n-2nd fibonacci number 
      for(let counter = 3; counter <= n; counter++) { 
          result = nMin1 + nMin2; 
          nMin1 = nMin2; 
          nMin2 = result; 
      } 
  } 

  return result; 
} 

console.log(fib_iter(3)); // prints 2 
console.log(fib_iter(4)); // prints 3 
console.log(fib_iter(5)); // prints 5 