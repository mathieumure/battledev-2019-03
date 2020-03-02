let data = [];

readline_object.on("line", (value) => { //Read input values
	data.push(value);
})

const parseInput = (input) => {
    // return input.slice(1);'
    return ['jfnjnfjjnn'
        'nfjfnfnfnf'
        'ffnnnjffnj'
        'ffnfjjjnjf'
        'fffnnnnffn'
        'fjjjfjjnjf'
        'ffnfnjjjjn'
        'nffnjnffnf']
}

const nextChar = char => String.fromCharCode(c.charCodeAt(0) + 1)

const getAllWords = (str, amount = 1, words = []) => {
    for (let i = 0; i < str.length; i++) {
        subWord = str.slice(0, i) + str.slice(i + 1)
        if (amount !== 1) {
            getAllWords(subWord, amount-1, words)
        } else if(!words.includes(subWord)) {
            words.push(subWord)
        }
    }
    return words
}

//Call ContestResponse when all inputs are read
readline_object.on("close", () => {
    const [base, ...other] = parseInput(data);
    let founded = false
    for (let i = 1; i <= 10; i++) {
        const baseAssert = getAllWords(base, i)
        const otherAssert = other.map(it => getAllWords(it, i))
        for (let j = 0; j < baseAssert.length; j++) {
            const it = baseAssert[j];
            const isContainedIn = otherAssert.every(at => {
                return at.includes(it)
            })
            if (isContainedIn) {
                console.error(it)
                founded = true
                break
            }
        }
        if (founded) {
            break
        }
    }

}); 
