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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    var frequencies=[];
    for(var i=0;i<1000000;i++){        
       frequencies[i]=0; 
    }
      for( i=0;i<arr.length;i++){        
       frequencies[arr[i]]++; 
    }
    var max=0;
    for(i=1;i<frequencies.length;i++){
       if(frequencies[i]>max){
           max=frequencies[i];
       } 
    }
     for(i=1;i<frequencies.length;i++){
       if(frequencies[i]==max){
           max=i;
           break;
       } 
    }
return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
