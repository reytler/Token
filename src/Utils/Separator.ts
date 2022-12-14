export function _getSeparator(baseSeparator:string): string{
    const position: number = Math.floor(Math.random() * 20);
    const separator: string = baseSeparator[position]
    return separator.toUpperCase();     
}