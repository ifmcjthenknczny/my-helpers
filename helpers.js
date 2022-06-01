export function mapOver(obj, func) {
    return Object.keys(obj).map(func);
}
;
export function removeDuplicates(array) {
    return [...array].filter((item, index) => array.indexOf(item) === index);
}
;
export function filterFromTerm(data, term, size) {
    return data.filter(a => a >= term).slice(0, size);
}
;
export function validateMail(mail) {
    const mailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailRegex))
        return true;
    else
        return false;
}
export function rangeNumbers(size, start) {
    return [...Array(size).keys()].map(i => i + start);
}
export function rangeChars(size = 26, startChar = 'A') {
    if (startChar.length !== 1)
        throw new Error("Enter char of length 1.");
    return [...Array(size).keys()].map(i => String.fromCharCode(startChar.charCodeAt(0) + i));
}
export function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}
export function randInt(start = 0, end = 100) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
export function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}
export function qsa(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}
export function sample(array) {
    return array[randInt(0, array.length - 1)];
}
export function parseToObject(data, leadingKey) {
    const newObject = {};
    for (let element of data) {
        const key = element[leadingKey];
        newObject[key] = element;
    }
    return newObject;
}
export function getValuesOfKey(array, key) {
    return array.map(element => element[key]);
}
export function objectHardCopy(object) {
    return Object.assign({}, object);
}
// export function filterProperty(object: {}, property: string | number) {
//     const {
//         [property]: removedProperty, ...newObject
//     } = object;
//     return newObject
// }
export async function limitPromiseConcurrency(promises, batchSize) {
    const promisesIterator = promises.entries();
    async function doStuff(iterator) {
        for (let [i, handler] of iterator)
            await handler;
    }
    const promiseBatch = new Array(batchSize).fill(promisesIterator).map(doStuff);
    Promise.all(promiseBatch);
}
export function hasNumber(myString) {
    return /\d/.test(myString);
}
export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
export function clean(string) {
    return string.trim().toLowerCase();
}
