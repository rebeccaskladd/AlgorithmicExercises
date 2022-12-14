/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return prefix;
            }
        }
        prefix += strs[0][i];
    }


    return prefix;
};