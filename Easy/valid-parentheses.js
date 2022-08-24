/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const symbols = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    let closing = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] in symbols) {
            closing.unshift(symbols[s[i]]);
        }
        else {
            if (closing.length === 0 || closing[0] !== s[i]) {
                return false;
            }

            closing.shift();
        }
    }

    if (closing.length) {
        return false;
    }

    return true;
};