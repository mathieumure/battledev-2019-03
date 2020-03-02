let data = [];

readline_object.on("line", (value) => { //Read input values
	data.push(value);
})

const parseInput = (input) => {
    return input;
}

//Call ContestResponse when all inputs are read
readline_object.on("close", () => {
    const input = parseInput(data);
    console.error(input)
}); 
