<?php

// Complete the minimumSwaps function below.
function minimumSwaps($arr) {
    foreach($arr as $inx => $val) {
        $arr[$inx]--;
    }
 
    $swap = 0;
    $i = 0;
    while($i < count($arr)) {
        if ($arr[$i] == $i) {
            $i++;
            continue;
        }
        $tmp = $arr[$arr[$i]];
        $arr[$arr[$i]] = $arr[$i];
        $arr[$i] = $tmp;
        $swap++;
    }
    return $swap;

}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$stdin = fopen("php://stdin", "r");

fscanf($stdin, "%d\n", $n);

fscanf($stdin, "%[^\n]", $arr_temp);

$arr = array_map('intval', preg_split('/ /', $arr_temp, -1, PREG_SPLIT_NO_EMPTY));

$res = minimumSwaps($arr);

fwrite($fptr, $res . "\n");

fclose($stdin);
fclose($fptr);
