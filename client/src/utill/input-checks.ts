export function inputNumsOnly(value: string, setFunc: any) {
    if ((parseInt(value)).toString() === value || "0"+(parseInt(value)).toString() === value) {
        setFunc((parseInt(value)).toString());
    } else if (value === "") {
        setFunc("0");
    }
}