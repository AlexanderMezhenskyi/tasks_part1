function getFrequentCharacter(str) {
    let resultStr = str.split(' ').join('').toLowerCase(),
        charactersCounts = {},
        maxNumber = 0,
        frequentCharacter;

    for (let i = 0; i < resultStr.length; i++) {
        let character = resultStr[i];

        if(!charactersCounts[character]){
            charactersCounts[character] = 0;
        }

        charactersCounts[character]++;
    }

    for (let key in charactersCounts) {
        if (charactersCounts[key] > maxNumber) {
            maxNumber = charactersCounts[key];
            frequentCharacter = [key];
        } else if (charactersCounts[key] === maxNumber) {
            frequentCharacter.push(key);
        }
    }

    if (!frequentCharacter) {
        console.log(`No characters`);
    } else if (frequentCharacter.length === 1) {
        console.log(`Frequent character is "${frequentCharacter.join('", ')}"`);
    } else {
        console.log(`Frequent characters are "${frequentCharacter.join('", ')}"`);
    }
}

getFrequentCharacter('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');