var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export function getSample(array) {
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
export function limitPromiseConcurrency(promises, batchSize) {
    return __awaiter(this, void 0, void 0, function* () {
        const promisesIterator = promises.entries();
        function doStuff(iterator) {
            return __awaiter(this, void 0, void 0, function* () {
                for (let [i, handler] of iterator)
                    yield handler;
            });
        }
        const promiseBatch = new Array(batchSize).fill(promisesIterator).map(doStuff);
        Promise.all(promiseBatch);
    });
}
export function hasNumber(myString) {
    return /\d/.test(myString);
}
export function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}
export function clean(string) {
    return string.trim().toLowerCase();
}
export function filterProperties(object, properties) {
    return Object.fromEntries(Object.entries(object).filter(([key, val]) => !properties.includes(key)));
}
