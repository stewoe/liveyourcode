function log_b(n: number, base: number): number { 
  if(n / base < 1) { 
     return 0; 
  } else { 
     return 1 + log_b(n / base, base); 
  } 
}  

console.log(log_b(1000, 10)); // prints 3 
console.log(log_b(8, 2)); // prints 3 
console.log(log_b(9, 3)); // prints 2 