// What is the output?

var num = 5;
function outer(){
    var num = 4;
    function inner(){
        num++;
        var num = 2;
        console.log(num);
    }
    inner();
}
outer();