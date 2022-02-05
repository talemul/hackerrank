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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    var returnArray=[];

for(var i=0;i<grades.length;i++){
    if(grades[i]>37){
     if(grades[i]%5==2||grades[i]%5==1){
          returnArray[i]= grades[i]; 
    // returnArray[i]= parseInt(grades[i]/5)*5;
        
    }else if(grades[i]%5==3||grades[i]%5==4){
       returnArray[i]= (parseInt(grades[i]/5)*5)+5;  
    }else{
        returnArray[i]= grades[i];  
    }
}else{
   returnArray[i]= grades[i];
}    
    }
   
return returnArray;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

