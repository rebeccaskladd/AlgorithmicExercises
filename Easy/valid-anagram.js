/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    s = s.split('');
    t = t.split('');

    for (let i = 0; i < t.length; i++) {
        let index = s.indexOf(t[i]);

        if (index === -1) {
            return false;
        }

        s.splice(index, 1);
    };

    return s.length === 0;
};