function objectMap(obj, func) {
    return Object.keys(obj).map(func)
};

function removeDuplicates(array) {
    return [...array].filter((item,
        index) => array.indexOf(item) === index);
};

function sortByTerm(data, term, size) {
    return data.sort(function(a, b) {
        return a.indexOf(term) <= b.indexOf(term) ? 1 : -1;
    }).slice(0, size);
};

function validateMail(mailString) {
    const mailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (mailString.match(mailRegex)) {
        return true;
    } else {
        return false;
    }
}

function range(size, startAt = 0) {
    //creates array of incrementing numbers or letters in alphabetic order of given size and starting from given number or letter (0 if not stated), works only for numbers and chars
    if (typeof startAt === "string" && startAt.length === 1) return String.fromCharCode(...range(size, startAt.charCodeAt(0))).split(
        ""
    );
    else if (typeof startAt === "number") return [...Array(size).keys()].map((i) => i + startAt);
    else return;
}

function sleep(ms) {
    // freezes code execution for given time in milliseconds, used in async functions with await keyword
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export {
    objectMap,
    removeDuplicates,
    sortByTerm,
    validateMail,
    range,
    sleep
}