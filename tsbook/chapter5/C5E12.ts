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

function getUnion(arr1: Array<number>, arr2: Array<number>): Array<number> { 
  return getSet(arr1.concat(arr2)); 
} 

printArray(getUnion([1, 2, 3], [2, 3, 4])); 