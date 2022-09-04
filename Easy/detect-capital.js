/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
    if (word.toLowerCase() === word) {
        return true;
    }
    if (word.toUpperCase() === word) {
        return true;
    }

    let temp = word.toLowerCase();
    temp = temp[0].toUpperCase() + temp.substring(1);

    if (temp === word) {
        return true;
    }

    return false;
};