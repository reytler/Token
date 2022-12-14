export function _getSeparator(baseSeparator:string): string{
    if(baseSeparator.length < 20){
        throw new Error('A string tem menos de 20 caracteres');
    }
    const position: number = Math.floor(Math.random() * 20);
    const separator: string = baseSeparator[position]
    return separator.toUpperCase();     
}