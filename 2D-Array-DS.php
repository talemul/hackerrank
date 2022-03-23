<?php

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum($arr) {
    // Write your code here
    $maxSum=-99999;
for($i=0;$i<count($arr)-2;$i++){
    $sum=0;
    for($j=0;$j<count($arr[$i])-2;$j++){
     $sum=$arr[$i][$j]+ $arr[$i][$j+1]+ $arr[$i][$j+2]+ $arr[$i+1][$j+1]+ $arr[$i+2][$j]+$arr[$i+2][$j+1]+$arr[$i+2][$j+2];
     if($sum>$maxSum){
       $maxSum=$sum;  
     }   
    }
}
return $maxSum;
}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$arr = array();

for ($i = 0; $i < 6; $i++) {
    $arr_temp = rtrim(fgets(STDIN));

    $arr[] = array_map('intval', preg_split('/ /', $arr_temp, -1, PREG_SPLIT_NO_EMPTY));
}

$result = hourglassSum($arr);

fwrite($fptr, $result . "\n");

fclose($fptr);
