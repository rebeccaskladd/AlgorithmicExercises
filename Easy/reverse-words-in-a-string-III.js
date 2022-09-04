/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    let wordsReversed = s.split(' ');

    wordsReversed = wordsReversed.map(element => {
        element = element.split('');
        for (let i = 0; i < Math.floor(element.length / 2); i++) {
            let temp = element[i];
            element[i] = element[element.length - 1 - i];
            element[element.length - 1 - i] = temp;
        }

        element = element.join('');
        return element;
    });

    wordsReversed = wordsReversed.join(' ');
    return wordsReversed;
};