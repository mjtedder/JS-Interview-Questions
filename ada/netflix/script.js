// Question:
// We are building a Netflix clone where users can stream movies. Our service tracks and logs usage for each user. Each log contains the name of the movie, movie rating, name of director, length of the movie (in minutes), number of minutes of the movie watched by the user and the movie genre. Can you help with some data analysis?

// Our code needs to return the following information:

// Favorite movie: the name of the movie with the highest percentage of movie watched by the user. If a user watched 30mins out of 60mins for movie1 (50%) and 75min out of 100min of movie2 (75%), the movie with the highest percentage of movie watched by the user is movie2.
// Favorite director: the name of director for which the user has watched the most number of movies.

function processInput(arr) {
    //COMPLETE THIS FUNCTION
    console.log(arr);
}

//you do not need to edit any code below this line
process.stdin.resume();
process.stdin.setEncoding('ascii');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on('data', function (data) {
    input_stdin += data;
});
process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    testCode();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

function testCode() {
    var n = parseInt(readLine());
    arr = []
    for (i = 0; i < n; i++) {
        str = readLine();
        arr.push(str);
    }
    processInput(arr);
}