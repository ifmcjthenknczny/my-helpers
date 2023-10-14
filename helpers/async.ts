export const sleep = (miliseconds: number) =>
    new Promise((resolve) => setTimeout(resolve, miliseconds))

export const limitPromiseConcurrency = async (
    promises: Promise<void>[],
    batchSize: number
) => {
    const promisesIterator = promises.entries()
    async function doStuff(iterator: IterableIterator<[number, Promise<void>]>) {
        for (const [, handler] of iterator) await handler
    }
    const promiseBatch = new Array(batchSize).fill(promisesIterator).map(doStuff)
    Promise.all(promiseBatch)
}

export const clearAllIntervals = () => {
    const INTERVAL_ID = setInterval(function () {}, Number.MAX_SAFE_INTEGER)
    for (let i = 1; i < +INTERVAL_ID; i++) {
        clearInterval(i)
    }
}