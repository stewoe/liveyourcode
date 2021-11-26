function printArray(arr: Array<any>) { 
  for(let index = 0; index < arr.length; index++) { 
    console.log(arr[index]); 
  } 
} 

function getIntersect(arr1: Array<number>, arr2: Array<number>): Array<number> { 
  let intersect: Array<number> = []; 

  for(let index = 0; index < arr1.length; index++) { 
    let numToCheck = arr1[index]; 
    if(arr2.indexOf(numToCheck) > -1 && intersect.indexOf(numToCheck) == -1) { 
      intersect.push(numToCheck); 
    } 
  } 

  return intersect; 
} 

printArray(getIntersect([1, 2, 3], [2, 3, 4])); 