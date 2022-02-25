const kelvin = 293;
    // I used the const variable to assign 293 and const means the the value cannot be changed.
var celsius = (kelvin - 273);
    /* I first used const to make sure whatever the value equals out to that it cannot be changed then I 
    used the subtraction operator to subtract 273 from the variable kelvin*/
var fahrenheit = (celsius * (9/5) + 32);
    //the value for the farenheit was created using the equation above.
var fahrenheit = Math.floor(68);
    //The number was already a whole number so it returned Nan
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
