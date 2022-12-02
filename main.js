const opp = require("./utils");
const prompt = require('readline-sync');


let sentence = prompt.question("Enter a sentence: ");


let mat1 = [
    [1, 3, 2],
    [3, 1, 1],
    [1, 2, 2]
];

let mat2 = [
    [2, 1, 1],
    [1, 0, 1],
    [1, 3, 1]
];

console.log(opp.matrixProduct(mat1, mat2));

console.log(opp.sumOfEachRow(mat1));

console.log(opp.sumOfMatrices(mat1, mat2));

console.log(opp.trimOwn("    hello world     "));

console.log(opp.countWords(sentence));



