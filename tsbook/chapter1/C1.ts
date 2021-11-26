// C1E1: to solve this exercise use the slash operator to divide 54 by 2.  

54 / 2 

// C1E2: For this exercise let's try cos(42). This results in an error this is because we are not using the correct function. Typescript comes with a lot of functionality, but we have to find out how to access it. For this we can use Google or any other search engine of your choice search for “TypeScript cosine”. Often, you will find JavaScript resources, even if you search for TypeScript. This is OK, because TypeScript is transpiled to JavaScript in the end, so you can use all the JavaScript functionality also in TypeScript. 

// This way we find out that TypeScript has a cosine function inside the Math object. To use the cosine function we type Math.cos. This way we can easily calculate the cosine of 42 in radians. 

Math.cos(42); 

// C1E3: Use the same approach as in the previous exercise to search for the arcus cosine function. You will find out that the arcus cosine function also resides in the Math object and that it can be accessed by using Math.acos. 

Math.acos(0.42); 

// C1E4: Now we are going to implement a formula that calculates the degrees in Celsius given degrees in Fahrenheit you can use this formula: degreesFahrenheit = (degreesCelsius * 9 / 5) + 32 Let's implement that and not let's try it with 20 degrees Celsius, and also with 30 and 40 degrees Celsius.  

(20 * 9 / 5) + 32 

(30 * 9 / 5) + 32 

(40 * 9 / 5) + 32 
 