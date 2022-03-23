#include <bits/stdc++.h>

using namespace std;

vector<string> split_string(string);

long long merge(vector<int>& p_vArr, int p_iLeft, int p_iRight, int p_iMid) {
    long long iNumOfInversions = 0;
    
    int i, j, k, iTemp[p_iRight - p_iLeft + 1];
    i = p_iLeft;
    j = p_iMid + 1;
    k = 0;
    
    while( i <= p_iMid && j <= p_iRight ) {
        if ( p_vArr[i] <= p_vArr[j] ) {
            iTemp[k] = p_vArr[i];
            k++;
            i++;
        }
        else {
            iTemp[k] = p_vArr[j];
            k++;
            j++;
            iNumOfInversions += (p_iMid - i + 1);
        }
    }
    
    while ( i <= p_iMid ) {
        iTemp[k] = p_vArr[i];
        k++;
        i++;
    }
    
    while ( j <= p_iRight ) {
        iTemp[k] = p_vArr[j];
        k++;
        j++;
    }
    
    for(i = p_iLeft; i <= p_iRight; i++) {
        p_vArr[i] = iTemp[i - p_iLeft];
    }
    
    return iNumOfInversions;
}

long long mergeSort(vector<int>& p_vArr, int p_iLeft, int p_iRight) {
    int iMid = 0;
    if ( p_iLeft < p_iRight ) {
        iMid = (p_iLeft + p_iRight) / 2;
        
        return mergeSort(p_vArr, p_iLeft, iMid) + mergeSort(p_vArr, iMid+1, p_iRight) + merge(p_vArr, p_iLeft, p_iRight, iMid);
    }
    
    return 0;
}


// Complete the countInversions function below.
long countInversions(vector<int> arr) {
    return mergeSort(arr, 0, arr.size() - 1);
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    int t;
    cin >> t;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    for (int t_itr = 0; t_itr < t; t_itr++) {
        int n;
        cin >> n;
        cin.ignore(numeric_limits<streamsize>::max(), '\n');

        string arr_temp_temp;
        getline(cin, arr_temp_temp);

        vector<string> arr_temp = split_string(arr_temp_temp);

        vector<int> arr(n);

        for (int i = 0; i < n; i++) {
            int arr_item = stoi(arr_temp[i]);

            arr[i] = arr_item;
        }

        long result = countInversions(arr);

        fout << result << "\n";
    }

    fout.close();

    return 0;
}

vector<string> split_string(string input_string) {
    string::iterator new_end = unique(input_string.begin(), input_string.end(), [] (const char &x, const char &y) {
        return x == y and x == ' ';
    });

    input_string.erase(new_end, input_string.end());

    while (input_string[input_string.length() - 1] == ' ') {
        input_string.pop_back();
    }

    vector<string> splits;
    char delimiter = ' ';

    size_t i = 0;
    size_t pos = input_string.find(delimiter);

    while (pos != string::npos) {
        splits.push_back(input_string.substr(i, pos - i));

        i = pos + 1;
        pos = input_string.find(delimiter, i);
    }

    splits.push_back(input_string.substr(i, min(pos, input_string.length()) - i + 1));

    return splits;
}
