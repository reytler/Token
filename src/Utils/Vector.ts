export function _getVector(str: string): string[] {
    let vector: string[] = str.split(/[A-Z]/)
    vector.pop()
    return vector
}