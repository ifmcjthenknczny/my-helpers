export function objectMap(obj, func) {
    return Object.keys(obj).map(func)
};

export function removeDuplicates(array) {
    return [...array].filter((item,
        index) => array.indexOf(item) === index);
};

export function sortFromTerm(data, term, size) {
    return data.sort((a, b) => a.indexOf(term) <= b.indexOf(term) ? 1 : -1).slice(0, size);
};

export function filterFromTerm (data, term, size) {
    return data.filter(a => a >= term).slice(0, size);
};

export function validateMail(mailString) {
    const mailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (mailString.match(mailRegex)) {
        return true;
    } else {
        return false;
    }
}

export function range(size, startAt = 0) {
    if (typeof startAt === "string" && startAt.length === 1) return String.fromCharCode(...range(size, startAt.charCodeAt(0))).split(
        ""
    );
    else if (typeof startAt === "number") return [...Array(size).keys()].map((i) => i + startAt);
    else return;
}

export function sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

export function randInt(start = 0, end = 100) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

export function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
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
    return parent.querySelector(selector)
}

export function qsa(selector, parent = document) {
    return [...parent.querySelectorAll(selector)]
}

export function sample(array) {
    return array[randInt(0, array.length - 1)]
}

export function arrayToObject(data, leadingKey) {
    const newObject = {};
    for (let element of data) {
        const key = element[leadingKey];
        newObject[key] = element;
    }
    return newObject
}

export function getValuesOfKeys(array, key) {
    return array.map(element => element[key])
}

export function groupBy(array, key) {
    return array.reduce((group, element) => {
        const keyValue = element[key]
        return {
            ...group,
            [keyValue]: [...(group[keyValue] ?? []), element]
        }
    }, {})
}

export function objectHardCopy(object) {
    return Object.assign({}, object)
}

export function filterPropertyFromObject(object, property) {
	const { [Object.keys(property)]: removedProperty, ...newObject } = object;
	return newObject
}

export async function limitPromiseConcurrency(promises, batchSize) {
    const promisesIterator = promises.entries();
    async function doStuff(iterator) {
        for (let [i, handler] of iterator) await handler
    }
    const promiseBatch = new Array(batchSize).fill(queueIterator).map(doStuff)
    Promise.all(promiseBatch)
}

export function hasNumber(myString) {
    return /\d/.test(myString);
}

export function capitlizeString(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}