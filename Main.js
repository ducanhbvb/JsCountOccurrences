function inputArray(maxCurrent, maxColumn) {
    let arr = [];
    for (let current = 0; current < maxCurrent; current++) {
        arr[current] = new Array(maxColumn);
        for (let column = 0; column < maxColumn; column++) {
            arr[current][column] = Math.floor(Math.random() * 90 + 10);
        }
    }
    return arr;
}
function searCount(test,arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === test) {
                sum++;
            }
        }
    }
    return sum;
}
function displayResult(valueToPrint, arr) {
    document.getElementById('result').innerHTML ='';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j === arr[i].length - 1) {
                document.getElementById('result').innerHTML += arr[i][j] + '<br>';
            } else {
                document.getElementById('result').innerHTML += arr[i][j] + ',';
            }
        }
    }
    switch (true) {
        case (valueToPrint>0):
            document.getElementById('result').innerHTML += 'Number in  array count occurrences = ' + valueToPrint+'<br>';
            break;
        default:
            document.getElementById('result').innerHTML += 'Number not in Array'+'<br>';
            break;
    }
}
function main() {
    let maxCurrent = parseInt(document.getElementById('textMaxCurrent').value);
    let maxColumn = parseInt(document.getElementById('textMaxColumn').value);
    let test = parseInt(document.getElementById('textInput').value);
    let array = inputArray(maxCurrent, maxColumn);
    let sum = searCount(test,array);

    displayResult(sum, array);
}