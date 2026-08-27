// Implement Lower Bound
// Solved
// Difficulty: EasyAccuracy: 50.04%Submissions: 113K+Points: 2
// Given a sorted array arr[] (following 0-based indexing) and a number target, find the lower bound of the target in this given array. The lower bound of a number is defined as the smallest index in the sorted array where the element is greater than or equal to the given number.

// Note: If all the elements in the given array are smaller than the target, the lower bound will be the length of the array. 

// Examples :

// Input:  arr[] = [2, 3, 7, 10, 11, 11, 25], target = 9
// Output: 3
// Explanation: 3 is the smallest index in arr[] where element (arr[3] = 10) is greater than or equal to 9.




class Solution {
    lowerBound(arr, target) {
        let low = 0;
        let high = arr.length -1;
        let temp = arr.length;
        while (low <= high) {
            let mid = Math.floor ((low +high) /2);
            if(arr[mid] >= target) {
                temp = mid;
                high = mid - 1;
                
            }else {
                low = mid + 1;
                
            }
        }
         return temp;   
    }
}