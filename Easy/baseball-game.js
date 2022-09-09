/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
    let record = [];

    for (let i = 0; i < ops.length; i++) {
        let newScore;

        if (ops[i] !== 'C') {
            if (ops[i] === '+') {
                newScore = record[record.length - 1] + record[record.length - 2];
            }
            else if (ops[i] === 'D') {
                newScore = 2 * record[record.length - 1];
            }
            else {
                newScore = Number(ops[i]);
            }

            record.push(newScore);
        }
        else {
            record.pop();
        }
    }

    return record.reduce((acc, val) => {
        return acc + val;
    }, 0);
};