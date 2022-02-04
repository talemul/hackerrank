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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    var time='';
    if(s[8]=='A'){
       if(parseInt(s[0])==1&&parseInt(s[1])==2){
          time='00';  
        }else{
          time=s[0]+''+s[1];   
        }
     
    }else{
         if(parseInt(s[0])==1&&parseInt(s[1])==2){
          time='12';  
        }else{            
          time=(parseInt(s[0]+s[1])+12);   
        }
      
    }
    var st='';
      for(var i=2;i<8;i++){
         st=st+''+s[i];   
        } 
   
    return time+st;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
