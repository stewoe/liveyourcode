function triangle(n: number) { 
  for(let row = 1; row <= n; row++) { 
    let line: string = ""; 
  
    for(let col = 1; col <= row; col++) { 
      line = line + "*"; 
    } 
  
    console.log(line); 
  } 
} 
  
triangle(3); 
triangle(5); 