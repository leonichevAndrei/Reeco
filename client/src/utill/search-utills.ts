export function searchFilterCheck(input: string, check: string) {
    const reg = new RegExp(`^${input.toLowerCase()}`, "i");
    return check.toLowerCase().search(reg) !== -1;
}
