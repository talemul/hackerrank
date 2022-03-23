'use strict';
function minimumBribes(q) {
    // Write your code here
    //console.log(q);
    var sum=0,i,j,count=0;
    for(i=0;i<q.length;i++){
        if((q[i]-(i+1))>=3){
          sum='Too chaotic';
          break;  
        } 
        for ( j = i - 1; j >= q[i] - 2 && j >= 0; j--) {
        if (q[j] > q[i]){ count++;
       // console.log(q[j]+'|j|'+j+'|qi|'+q[i]+'|i|'+i);
        }
        
      }      
    }
    if(sum=='Too chaotic'){
      console.log(sum);   
    }else{
       console.log(count);      
    }   

}
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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */



function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
