function christmas_tree(n: number) { 
  for(let row = 1; row <= n; row++) { 
    let line: string = ""; 
     
    // add blanks to the line 
    for(let col = 1; col <= (n - row); col++) { 
      line = line + " "; 
    } 
  
    // add asterisks to the line 
    for(let col = 1; col <= (row - 1) * 2 + 1; col++) { 
      line = line + "*"; 
    } 
  
    console.log(line); 
  } 
} 
  
christmas_tree(3); 
christmas_tree(5); 