var myArray = ['a', 'b', 'c', 'd', 'e'];

myArray.push('END');
myArray.unshift('START');

console.log(myArray);

console.log('====================================')

// ES6

let ES6Array = ['f', 'g', 'h', 'i', 'k']

ES6Array = ['START',...ES6Array] // spread operator
ES6Array = [...ES6Array,'END']

console.log(ES6Array)