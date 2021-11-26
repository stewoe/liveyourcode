function flag(height: number, width: number, poleheight: number): void { 
  print_flag(height, width); 
  print_pole(poleheight); 
} 

function print_pole(poleheight: number) { 
  for(let row = 1; row <= poleheight; row++) { 
      console.log("*"); 
  } 
} 

function print_flag(height: number, width: number) { 
  let linetext = get_line(width); 

  for(let row = 1; row <= height; row++) { 
      console.log(linetext); 
  } 
} 

function get_line(width: number) { 
  let linetext: string = ""; 

  for(let col = 1; col <= width; col++) { 
      linetext = linetext + "*"; 
  } 

  return linetext; 
} 

flag(3,5,4); 