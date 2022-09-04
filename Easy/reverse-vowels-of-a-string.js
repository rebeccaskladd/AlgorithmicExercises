/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const vowelsArr = [];

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelsArr.push(s[i]);
        }
    }

    let count = 0;
    for (let j = 0; j < s.length; j++) {
        if (vowels.includes(s[j])) {
            s = s.substring(0, j) + vowelsArr[vowelsArr.length - 1 - count] + s.substring(j + 1);
            count++;
        }
    }

    return s;
};