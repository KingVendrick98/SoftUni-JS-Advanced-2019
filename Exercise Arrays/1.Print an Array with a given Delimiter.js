function solve(input) {

    let delimeter = input.pop();
    let place = [];
    
    for (let i = 0; i < input.length; i++) {
        place.push(input[i])
    }
    console.log(place.join(delimeter))
}
solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']

)