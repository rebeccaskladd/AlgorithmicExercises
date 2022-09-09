/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = (image) => {
    let newImage = [];

    image.forEach(row => {
        let newRow = [];

        for (let i = row.length - 1; i >= 0; i--) {
            let inverse = row[i] === 0 ? 1 : 0;
            newRow.push(inverse);
        }

        newImage.push(newRow);
    });

    return newImage;
};