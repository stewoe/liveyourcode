function outputRange(n: number) {
  if(n >= 0) {
    outputRange(n-1);
    console.log(n);
  }
}

outputRange(5);