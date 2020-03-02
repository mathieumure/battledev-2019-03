let data = [];

readline_object.on("line", (value) => { //Read input values
	data.push(value);
})

const parseInput = (input) => {
    return {
        initial: Number.parseInt(input[0]),
        steps: input.slice(1).map(it => it.split(' ').map(at => Number.parseInt(at)))
    };
}

//Call ContestResponse when all inputs are read
readline_object.on("close", () => {
    const {initial, steps} = parseInput(data);
    let position = steps.reduce((acc, it, index) => {
        return acc + it[0] - it[1]
    }, initial)
    if (position <= 100) {
        console.log(1000)
    } else if (position <= 10000) {
        console.log(100)
    } else {
        console.log('KO')
    }
    console.log(position)
}); 
