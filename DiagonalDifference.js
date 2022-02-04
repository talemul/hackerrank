'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    var diagonal1=0;
    var diagonal2=0;
 for(var i = 0; i < arr.length; i++){
     for(var j=0;j<arr[i].length;j++){     
                // Calculating the primary diagonal.
              if(i==j){
                diagonal1 += arr[i][j];  
              }  
          
      // Reversing the second dimension of array to calculate secondary diagonal.
      if((i+j)==(arr.length-1)){
           diagonal2 += arr[i][j]; 
      }
        
    }
    }
   var result=diagonal1-diagonal2;
    if(result<0){
      result=result*(-1);  
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
