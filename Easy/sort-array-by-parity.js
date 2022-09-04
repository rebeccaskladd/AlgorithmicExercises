/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = (nums) => {
    let numsSorted = [...nums];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            numsSorted.splice(i, 1);
            numsSorted.unshift(nums[i]);
        }
    }

    return numsSorted;
};