'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n, arr) {
    // Write your code here
    
    var cout="";
    for(var i = 1; i < n; i++) {
        var V = arr[i];
        for(var j = i; j >= 0; j--) {
            if(V < arr[j-1]) {
                arr[j] = arr[j-1];
            } else {
                arr[j] = V;
                break;
            }
        }
        // Print the array after each iteration
        cout="";
        for(var k = 0; k < n; k++) {
            cout=cout+""+arr[k]+" ";
        }
       console.log(cout);
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
