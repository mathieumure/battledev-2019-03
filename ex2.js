let data = [];

readline_object.on("line", (value) => { //Read input values
	data.push(value);
})

const parseInput = (input) => {
    return input.map(it => Number.parseInt(it)).slice(1);
}

//Call ContestResponse when all inputs are read
readline_object.on("close", () => {
    const input = parseInput(data);
    let amount = 0
    let nb = 1
    input.forEach(it => {
        if ((amount + it) <= 100) {
            amount += it
        } else {
            amount = it
            nb++
        }
    });
    console.log(nb)
}); 
