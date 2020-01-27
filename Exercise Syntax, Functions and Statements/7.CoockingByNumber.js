function solve(input) {
    let number = Number(input.shift());

    let operations = {
        chop: (x) => { return (x / 2) },
        dice: (x) => { return (Math.sqrt(x)) },
        spice: x => { return ++x },
        bake: x => { return x *= 3 },
        fillet: x => { return x *= 0.8 },
    }

    for (let index = 0; index < input.length; index++) {
        number = operations[input[index]](number);
        console.log(number)
        
    }
}