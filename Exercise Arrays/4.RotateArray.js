function solve(input) {

    let step = +input.pop() % input.length;

    for (let i = 0; i < step; i++) {
        let element = input.pop();
        input.unshift(element);
        
    }

    return input.join(' ')
}

console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
))