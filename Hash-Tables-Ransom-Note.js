'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
function checkMagazine(magazine, note) {
    // Write your code here
 
let i,returnString="No";
for(i=0;i<note.length;i++){
    //console.log(magazine.indexOf(note[i])+'||i'+i);
    if(magazine.indexOf(note[i])==-1){
        returnString="No";
        break;
    }else{
        magazine[magazine.indexOf(note[i])]="";
        returnString="Yes";
    }
}
console.log(returnString);
}
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
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */



function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(firstMultipleInput[0], 10);

    const n = parseInt(firstMultipleInput[1], 10);

    const magazine = readLine().replace(/\s+$/g, '').split(' ');

    const note = readLine().replace(/\s+$/g, '').split(' ');

    checkMagazine(magazine, note);
}
