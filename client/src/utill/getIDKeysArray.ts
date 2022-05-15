export function getIDKeysArray(array: any[]) {
    const result = [];
    for (let elm of array) {
        result[elm.id] = elm;
    }
    return result;
}
export function getNormalArray(array: any[]) {
    const result = new Array();
    for (let elm of array) {
        if (elm !== undefined) {
            result.push(elm);
        }  
    }
    return result;
}