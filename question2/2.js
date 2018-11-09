// How do you create a secret variable in JavaScript?

// Create a variable that lives inside the local scope of a function.

function secretVariable() {
    var private = 'super secret code';
    return function() {
        return private
    }
}

var getPrivateVariable = secretVariable()

console.log(getPrivateVariable());