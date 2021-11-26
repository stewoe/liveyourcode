function outputRangeReverse(n: number) {
  if(n >= 0) {
    console.log(n);
    outputRangeReverse(n-1);
  }
}

outputRangeReverse(5);