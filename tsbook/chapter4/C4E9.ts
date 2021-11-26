function slow_mul(a: number, b: number): number { 
  let result = 0; 
  
  for(let counter = 1; counter <= b; counter++) { 
    result = result + a; 
  } 
  
  return result; 
} 
  
console.log(slow_mul(2,4)); // prints 8 