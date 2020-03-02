let data = [];

readline_object.on("line", (value) => { //Read input values
	data.push(value);
})

const parseInput = (input) => {
    return {
        size: Number.parseInt(input[0]),
        area: [...input.slice(1)]
    };
}

const COIN = 'o'
const MULTIPLICATOR = '*'

const RIGHT = '>'
const LEFT = '<'
const TAKE = 'x'
const UP = '^'
const DOWN = 'v'

const runAndTake = (item, area) => {
    let path = ''
    for (let x = 0; x < area.length; x++) {
        const line = area[x]
        if (x % 2 === 0) {
            for (let y = 0; y < line.length; y++) {
                const square = line[y];
                if (square === item) {
                    path += TAKE
                }
                if (y !== line.length - 1) {
                    path += RIGHT
                }
            }
        } else {
            for (let y = line.length - 1; y >= 0; y--) {
                const square = line[y];
                if (square === item) {
                    path += TAKE
                }
                if (y !== 0) {
                    path += LEFT
                }
            }
        }
        
        if (x !== area.length - 1) {
            path += DOWN
        }
    }
    return path
}

const resetPath = (size) => {
    let path = ''
    path += UP.repeat(size - 1)
    if (size % 2 === 1) {
        path += LEFT.repeat(size - 1)
    }
    return path
}

//Call ContestResponse when all inputs are read
readline_object.on("close", () => {
    const {size, area} = parseInput(data);
    const pathCoin = runAndTake(COIN, area)
    const rewind = resetPath(size)
    const multiPath = runAndTake(MULTIPLICATOR, area)
    console.log(pathCoin + rewind + multiPath)
}); 
