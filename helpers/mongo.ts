import { ObjectId } from 'mongodb'

export const fromMongoId = <T extends { _id: ObjectId }>(
    obj: T
): Omit<T, '_id'> & { id: string } => {
    const { _id, ...rest } = obj
    return { ...rest, id: _id.toHexString() }
}
  
export const toMongoId = <T extends { id: string }>(
    obj: T
): Omit<T, 'id'> & { _id: ObjectId } => {
    const { id, ...rest } = obj
    return { ...rest, _id: new ObjectId(id) }
}