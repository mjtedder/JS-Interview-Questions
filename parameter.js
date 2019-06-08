// Let's learn about the difference between parameters and arguments in JavaScript.

// PARAMETERS - variables listed as part of the function definition
// ARGUMENTS - values passed to the function when it is called

// Basic function with three parameters that logs the sum of all the parameters
function argCheck(param1, param2, param3) {
    console.log(param1 + param2 + param3)
}

// Function with extra arguments
argCheck(1, 2, 3, 4) // This logs 6 because the extra fourth argument is ignored

// Function with missing arguments
argCheck(1, 2) // This logs NaN (Not a Number) because param3 is undefined (1 + 2 + undefined = NaN)

