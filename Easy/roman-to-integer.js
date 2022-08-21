/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const roman = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        XL: 40,
        X: 10,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };

    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] && roman[s[i] + s[i + 1]]) {
            num += roman[s[i] + s[i + 1]];
            i++;
        }
        else {
            num += roman[s[i]];
        }
    }

    return num;
};