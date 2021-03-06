import styled from "styled-components";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

export const DdWrap = styled.div`
    position: relative;
`;

export const DdTitle = styled.a`
    color: white;
    display: block;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        color: white;
    }
`;

type DdBodyProps = {visible: boolean};

export const DdBody = styled.div`
    box-shadow: 2px 5px 15px -5px;
    position: absolute;
    background-color: white;
    width: 100%;
    padding: 3px 5px 3px 10px;
    display: ${(props : DdBodyProps) => props.visible === true ? "block" : "none"};
    border-radius: 5px;
`;

export const DdElement = styled.a`
    display: block;
    cursor: pointer;
    color: black;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        color: green;
    }
`;

export const MyChevronDown = styled(ChevronDown)`
    color: white;
`;

export const MyChevronUp = styled(ChevronUp)`
    color: white;
`;