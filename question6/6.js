// What will the below code output to the console and why?

(function(){
    var a = b = 3;
  })();

  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));