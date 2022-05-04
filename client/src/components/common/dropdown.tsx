import { useState } from "react";
import { DdBody, DdElement, DdTitle, DdWrap, MyChevronDown, MyChevronUp } from "../styled/dropdown";

export default function Dropdown(props: { text: string, list: [string, string, string] }) {

    const { text, list } = props;

    const [toggle, setToggle] = useState(false);

    return (
        <DdWrap>
            <DdTitle onClick={() => setToggle(!toggle)}>{text} {toggle ? <MyChevronUp /> : <MyChevronDown />}</DdTitle>
            <DdBody visible={toggle ? true : false}>
                {list.map((element, i) => {
                    return <DdElement onClick={() => setToggle(!toggle)} href={void(0)}>{element}</DdElement>
                })}
            </DdBody>
        </DdWrap>
    )
}