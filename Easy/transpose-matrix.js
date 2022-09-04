/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix) => {
    let m = matrix.length;
    let n = matrix[0].length;

    let tempMatrix = [];
    for (let a = 0; a < n; a++) {
        tempMatrix.push(Array(m))
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            tempMatrix[j][i] = matrix[i][j];
        }
    }

    return tempMatrix;
};  