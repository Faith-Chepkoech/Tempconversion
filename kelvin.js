const kelvin = 0;
//kelvin to celsius
celsius = kelvin - 273;
// to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//to whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);