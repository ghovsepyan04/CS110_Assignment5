
// 1)product of matrices

function matrixProduct(mat1, mat2) {
    let prodmat = [];

    for (let i = 0; i < mat1.length; i++) {
        prodmat[i] = [];

        for (let j = 0; j < mat2[0].length; j++) {
            let prod = 0;

            for (let k = 0; k < mat2.length; k++) {
                prod += mat1[i][k] * mat2[k][j];
            }     
        prodmat[i][j] = prod;
        } 
    } 
    return prodmat;
}


// 2) sum of row

function sumOfEachRow(mat) {
    let newMat = [];

    for (let i = 0; i < mat.length; i ++) {
        let sum = 0;

        for (let j=0; j < mat[0].length; j++) {
            sum += mat[i][j];
        }
        newMat.push(sum);
    }

    return newMat;
}

// 3) sum of matrices

function sumOfMatrices(mat1, mat2) {
    let result = [];

    for (let i = 0; i < mat1.length; i ++) {
        let arr = [];

        for (let j=0; j < mat1[0].length; j++) {
            arr.push(mat1[i][j] + mat2[i][j]);
        }

        result.push(arr);
    }
    return result;
}


// 4) word counter

function countWords(str) {
    arr = str.split(" ");
    return arr.length;
}


// 5) own trimmer

function trimOwn(str) {
    let trimstr = "";

    let i = 0;    
    while (str[i] === " ") i++;

    let j = str.length-1;
    while (str[j] === " ") j--;
    
    while (i < j+1) {
        trimstr += str[i];
        i++;
    }
    return trimstr;    
}

module.exports = {
    matrixProduct,
    sumOfEachRow,
    sumOfMatrices,
    countWords,
    trimOwn
};