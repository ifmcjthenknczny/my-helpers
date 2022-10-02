"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterProperties = exports.clean = exports.capitalize = exports.hasNumber = exports.limitPromiseConcurrency = exports.objectHardCopy = exports.getValuesOfKey = exports.parseToObject = exports.getSample = exports.qsa = exports.qs = exports.shuffle = exports.randInt = exports.sleep = exports.rangeChars = exports.rangeNumbers = exports.validateMail = exports.filterFromTerm = exports.removeDuplicates = exports.mapOver = void 0;
function mapOver(obj, func) {
    return Object.keys(obj).map(func);
}
exports.mapOver = mapOver;
;
function removeDuplicates(array) {
    return [...array].filter((item, index) => array.indexOf(item) === index);
}
exports.removeDuplicates = removeDuplicates;
;
function filterFromTerm(data, term, size) {
    return data.filter(a => a >= term).slice(0, size);
}
exports.filterFromTerm = filterFromTerm;
;
function validateMail(mail) {
    const mailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailRegex))
        return true;
    else
        return false;
}
exports.validateMail = validateMail;
function rangeNumbers(size, start) {
    return [...Array(size).keys()].map(i => i + start);
}
exports.rangeNumbers = rangeNumbers;
function rangeChars(size = 26, startChar = 'A') {
    if (startChar.length !== 1)
        throw new Error("Enter char of length 1.");
    return [...Array(size).keys()].map(i => String.fromCharCode(startChar.charCodeAt(0) + i));
}
exports.rangeChars = rangeChars;
function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}
exports.sleep = sleep;
function randInt(start = 0, end = 100) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
exports.randInt = randInt;
function shuffle(array) {
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
exports.shuffle = shuffle;
function qs(selector, parent = document) {
    return parent.querySelector(selector);
}
exports.qs = qs;
function qsa(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}
exports.qsa = qsa;
function getSample(array) {
    return array[randInt(0, array.length - 1)];
}
exports.getSample = getSample;
function parseToObject(data, leadingKey) {
    const newObject = {};
    for (let element of data) {
        const key = element[leadingKey];
        newObject[key] = element;
    }
    return newObject;
}
exports.parseToObject = parseToObject;
function getValuesOfKey(array, key) {
    return array.map(element => element[key]);
}
exports.getValuesOfKey = getValuesOfKey;
function objectHardCopy(object) {
    return Object.assign({}, object);
}
exports.objectHardCopy = objectHardCopy;
async function limitPromiseConcurrency(promises, batchSize) {
    const promisesIterator = promises.entries();
    async function doStuff(iterator) {
        for (let [i, handler] of iterator)
            await handler;
    }
    const promiseBatch = new Array(batchSize).fill(promisesIterator).map(doStuff);
    Promise.all(promiseBatch);
}
exports.limitPromiseConcurrency = limitPromiseConcurrency;
function hasNumber(myString) {
    return /\d/.test(myString);
}
exports.hasNumber = hasNumber;
function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}
exports.capitalize = capitalize;
function clean(string) {
    return string.trim().toLowerCase();
}
exports.clean = clean;
function filterProperties(object, properties) {
    return Object.fromEntries(Object.entries(object).filter(([key, val]) => !properties.includes(key)));
}
exports.filterProperties = filterProperties;
