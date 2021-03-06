export function mapOver<T>(obj: {}, func: () => T) {
    return Object.keys(obj).map(func)
};

export function removeDuplicates<T>(array: T[]) {
    return [...array].filter((item,
        index) => array.indexOf(item) === index);
};

export function filterFromTerm<T>(data: T[], term: T, size: number) {
    return data.filter(a => a >= term).slice(0, size);
};

export function validateMail(mail: string) {
    const mailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailRegex)) return true;
    else return false;
}

export function rangeNumbers(size: number, start: number) {
    return [...Array(size).keys()].map(i => i + start);
}

export function rangeChars(size: number = 26, startChar: string = 'A') {
    if (startChar.length !== 1) throw new Error("Enter char of length 1.")
    return [...Array(size).keys()].map(i => String.fromCharCode(startChar.charCodeAt(0) + i));
}

export function sleep(duration: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, duration));
}

export function randInt(start: number = 0, end: number = 100) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

export function shuffle<T>(array: T[]) {
    let currentIndex = array.length,
        randomIndex: number;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

export function qs(selector: string, parent: Document | Element = document): Element {
    return parent.querySelector(selector)
}

export function qsa(selector: string, parent: Document | Element = document) {
    return [...parent.querySelectorAll(selector)]
}

export function getSample<T>(array: T[]) {
    return array[randInt(0, array.length - 1)]
}

export function parseToObject<T>(data: T[], leadingKey: number | string) {
    const newObject = {};
    for (let element of data) {
        const key = element[leadingKey];
        newObject[key] = element;
    }
    return newObject
}

export function getValuesOfKey<T>(array: {}[], key: any) {
    return array.map(element => element[key])
}

export function objectHardCopy(object: {}) {
    return Object.assign({}, object)
}

export async function limitPromiseConcurrency(promises: Promise<void>[], batchSize: number): Promise<void> {
    const promisesIterator = promises.entries();
    async function doStuff(iterator: IterableIterator<[number, Promise<void>]>) {
        for (let [i, handler] of iterator) await handler
    }
    const promiseBatch = new Array(batchSize).fill(promisesIterator).map(doStuff)
    Promise.all(promiseBatch)
}

export function hasNumber(myString: string) {
    return /\d/.test(myString);
}

export function capitalize(word: string) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

export function clean(string: string) {
    return string.trim().toLowerCase()
}

export function filterProperties(object: {}, properties: string[]) {
    return Object.fromEntries(Object.entries(object).filter(([key, val]) => !properties.includes(key)));
}