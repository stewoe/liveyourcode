function getMin(arr: Array<number>): number { 
  let currentMin = arr[0]; 

  for(let index = 1; index < arr.length; index++) { 
      if(arr[index] < currentMin) { 
          currentMin = arr[index]; 
      } 
  } 

  return currentMin; 
} 

let numbers: Array<number> = [5, 2, 7, 23, 671, 84]; 
console.log(getMin(numbers)); 