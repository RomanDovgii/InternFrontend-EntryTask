import {encoded, translations} from './data.js';

const idCounter = {};

const decodeData = (encodedData, vocabulary) => {
    const decodedData = encodedData.reduce((acc, datum) => {        
        const holder = {};

        Object.keys(datum).forEach((element) => {
            if (
                element === 'groupId' || 
                element === 'service' || 
                element === 'formatSize' || 
                element === 'ca'
            ) {
                holder[element] = datum[element];
            } else {
                holder[element] = vocabulary[datum[element]] ? vocabulary[datum[element]] : datum[element];
                idCounter[datum[element]] ? idCounter[datum[element]] += 1 : idCounter[datum[element]] = 1;
            }
        })
        return acc = [ ...acc, holder];
    }, []);

    

    return decodedData;
}

const getUniqueIds = (idEncounters) => {
    const uniqueIds = Object.keys(idEncounters).reduce((acc, element) => {
        if (idEncounters[element] === 1) {
            acc.push(element)
        }

        return acc;
    }, []);

    return uniqueIds;
}

const decodedData = decodeData(encoded, translations);
const uniqueIds = getUniqueIds(idCounter);

console.log(decodedData);
console.log(    
    `Список уникальных id: ${uniqueIds}`
);
// console.log("Let's rock");
// console.log(encoded, translations);
// console.log(decoded)
