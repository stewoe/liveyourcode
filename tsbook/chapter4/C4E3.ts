function fact_for(n: number): number { 
  let result: number = 1; 
  for(let cur_num = n; cur_num > 1; cur_num--) { 
      result = result * cur_num; 
  } 

  return result; 
} 

console.log(fact_for(3));   // 6 
console.log(fact_for(5));   // 120 