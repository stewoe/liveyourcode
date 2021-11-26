function fact_iter(n: number): number { 
  let result: number = 1; 
  let cur_num: number = n; 

  while(cur_num > 1) { 
      result = result * cur_num; 
      cur_num--; // same as cur_num = cur_num - 1; 
  } 

  return result; 
} 

console.log(fact_iter(3));   // 6 
console.log(fact_iter(5));   // 120 