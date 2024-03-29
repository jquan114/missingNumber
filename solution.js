// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


var missingNumber = function(nums) {
        let expectedSum = (nums.length * (nums.length + 1)) / 2;
    let actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
};
