function printArray(arr: Array<any>) { 
  for(let index = 0; index < arr.length; index++) { 
    console.log(arr[index]); 
  } 
} 

function getSet(arr: Array<number>): Array<number> { 
  let setReturn: Array<number> = []; 

  for(let index = 0; index < arr.length; index++) { 
      if(setReturn.indexOf(arr[index]) == -1) { 
          setReturn.push(arr[index]); 
      } 
  } 

  return setReturn; 
} 

let numbers: Array<number> = [3, 5, 7, 5, 2, 3]; 
let numbersSet: Array<number> = getSet(numbers); 
printArray(numbersSet); 