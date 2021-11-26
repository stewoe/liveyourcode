function printArray(arr: Array<any>) { 
  for(let index = 0; index < arr.length; index++) { 
    console.log(arr[index]); 
  } 
} 

function reverse(arr: Array<any>): Array<any> { 
  let arrReturn: Array<number> = []; 
  
  for(let index = 0; index < arr.length; index++) { 
      arrReturn.unshift(arr[index]); 
    } 
  
  return arrReturn; 
} 
  
let numbers: Array<number> = [5, 2, 7, 23, 671, 84]; 
let numbersReverse: Array<number> = reverse(numbers); 
printArray(numbersReverse); 