export const isEqual = (element1: any, element2: any): boolean => { // eslint-disable-line @typescript-eslint/no-explicit-any
    const type = typeof element1
    if (type !== typeof element2) {
        return false
    }
    if (type === 'function') {
        functionDeepEqual(element1, element2)
    }
    if (type === 'object') {
        objectDeepEqual(element1, element2)
    }
    return element1 === element2
}

const objectDeepEqual = (obj1: object, obj2: object) =>
    JSON.stringify(obj1) === JSON.stringify(obj2) // also for arrays (order matters)

const functionDeepEqual = (func1: Function, func2: Function) => // eslint-disable-line @typescript-eslint/ban-types
    func1.toString === func2.toString
