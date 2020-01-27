function solve(input) {

    let sum = input[0].reduce((a, b) => a + b);
    
    let isMagic = true;
    
    for (let i = 0; i < input.length; i++) {
        let sumRows = input[i].reduce((a, b) => a + b);
        let sumCols = input.map((x) => x[i]).reduce((a, b) => a + b);

        if (sumRows !== sumCols) {
            isMagic = false;
        }
    }
    return isMagic;
}

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ))