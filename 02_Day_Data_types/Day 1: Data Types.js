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
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    var myInt, myFloat, myString;
    myInt = parseInt(readLine());
    myFloat = parseFloat(readLine());
    myString = readLine();
    console.log(i + myInt);
    console.log((d + myFloat).toFixed(1));
    console.log(s + myString)
}
