function very_slow_pow(a: number, b: number): number { 
  let result = 0; 
  
  // Repeat the multiplication part b times 
  for(let mulitcount = 1; mulitcount <= b; mulitcount++) { 
  
    // The multiplication part 
    for(let counter = 1; counter <= a; counter++) { 
      result = result + a; 
    } 
  
  } 
  
  return result; 
} 
  
console.log(very_slow_pow(3,3)); // prints 27 