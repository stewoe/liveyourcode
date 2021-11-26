function printArray(arr: Array<any>) { 
  for(let index = 0; index < arr.length; index++) { 
    console.log(arr[index]); 
  } 
} 

function getEvenElements(arr: Array<number>): Array<number> { 
  let arrReturn: Array<number> = []; 

  for(let index = 0; index < arr.length; index++) { 
      if(arr[index] % 2 == 0) { 
          arrReturn.push(arr[index]); 
      } 
  } 

  return arrReturn; 
} 

let numbers: Array<number> = [5, 2, 7, 23, 671, 84]; 
let evenNumbers = getEvenElements(numbers); 
printArray(evenNumbers); 