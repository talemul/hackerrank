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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    
    var max=0,min=9999999999999,sum=0;
    for(var i=0;i<arr.length;i++){
        sum=0;
        for(var j=0;j<arr.length;j++){
            if(i==j){              
            }else{
              sum=sum+ arr[j]; 
            }
        }
        if(max<sum){
         max=sum;   
        }
        if(min>sum){
         min=sum;   
        }
    }
    console.log(min+' '+max);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
