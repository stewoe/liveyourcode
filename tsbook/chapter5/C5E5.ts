function getSum(arr: Array<number>): number {  
  let currentSum = arr[0];  

  for(let index = 1; index < arr.length; index++) {          
      currentSum = currentSum + arr[index];  
  }  

  return currentSum;  
}  

let numbers: Array<number> = [5, 2, 7, 23, 671, 84];  
console.log(getSum(numbers)); 