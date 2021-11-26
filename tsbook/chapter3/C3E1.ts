function sqrt(n: number): number {  
   return calcSqrt(n, n/2);  
}  
  
function calcSqrt(n: number, guess: number): number {  
    if(isGoodEnough(n, guess)) {  
       return guess;  
    } else {  
       return calcSqrt(n, getBetterGuess(n, guess));  
    }  
}  
  
function isGoodEnough(n: number, guess: number): boolean {   
   let difference = Math.abs(n - (guess * guess));  
  
   return difference < 0.001;  
}  
  
function getBetterGuess(n: number, guess: number): number {  
    let quotient = n / guess;  
    let avg = (guess + quotient) / 2;  
    return avg;  
} 
  
console.log(sqrt(9)); 