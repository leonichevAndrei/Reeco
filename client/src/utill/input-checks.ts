function parseCheck(value: string) {
    return (parseInt(value)).toString() === value
        || "0" + (parseInt(value)).toString() === value;
}

export function inputNumsOnly(value: string, setFunc: any) {
    if (parseCheck(value)) {
        setFunc((parseInt(value)).toString());
    } else if (value === "") {
        setFunc("0");
    }
}

function checkNumsWithD(value: string) {
    let cleanValue = value.replace("$", "");
    if (parseCheck(cleanValue)) {
        return `$${parseInt(cleanValue)}`;
    } else if (cleanValue == "") {
        return ("$0");
    }
    return false;
}

export function inputPriceAddPopup(value: string, arr: any, i: number, setFunc: any) {
    const newVal = checkNumsWithD(value);
    if (newVal) {
        const newArr = [...arr];
        newArr[i].value = newVal;
        setFunc(newArr);
    }
}

export function inputQuantityAddPopup(value: string, arr: any, i: number, setFunc: any) {
    if (parseCheck(value) || value === "") {
        const newArr = [...arr];
        const parsed = parseInt(value);
        newArr[i].value = value === "" ? value : (parsed === 0 ? "" : parsed);
        setFunc(newArr);
    }
}