var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Target found
        if (nums[mid] === target) {
            return mid;
        }

        // Left half is sorted
        if (nums[low] <= nums[mid]) {

            // Target is inside the sorted left half
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }

        } 
        // Right half is sorted
        else {

            // Target is inside the sorted right half
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));