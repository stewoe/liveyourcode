function getMax(arr: Array<number>): number {  
  let currentMax = arr[0];  

  for(let index = 1; index < arr.length; index++) {  
      if(arr[index] > currentMax) {  
          currentMax = arr[index];  
      }  
  }  

  return currentMax;  
}  

let numbers: Array<number> = [5, 2, 7, 23, 671, 84];  
console.log(getMax(numbers)); 