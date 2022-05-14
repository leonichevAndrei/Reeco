import { Link } from "react-router-dom";
import styled from "styled-components";

export const Body = styled.div`
    min-width: 100vw;
    height: 100vh;
    background-color: #ebebeb;
    display: flex;
    flex-direction: column;
`;

export const Page = styled.div`
    min-width: 100vw;
    height: calc(100vh - 145px);
    padding-bottom: 20px;
    overflow: scroll;
    z-index: 5;
`;

export const ListTitle = styled.div`
font-size: 1.1em;
    font-weight: bold;
`;

export const ListItem = styled.div`
`;

export const ListItemIn = styled(Link)`
    margin-right: 10px;
`;

export const ListItemDel = styled.a`
`;

const DefButton = styled.button`
    font-weight: bold;
    border-radius: 20px;
    border-width: 2px;
    border-style: solid;
    padding: 0 10px;
    font-size:0.9em;
    &:hover {
        text-decoration: underline;
    }
`;

export const WhiteButton = styled(DefButton)`
    border-color: #336242;
    background-color: white;
    color: #336242;
    height: 35px;
`;

export const GreenButton = styled(DefButton)`
    border-color: #336242;
    background-color: #336242;
    color: white;
`;

type GreyButtonProps = {
    active: boolean
}

export const GreyButton = styled(DefButton)`
    border-color: ${(props: GreyButtonProps) => props.active ? "#336242" : "#b2b2b2" };
    background-color: ${(props: GreyButtonProps) => props.active ? "#336242" : "#b2b2b2" };;
    color: white;
`;

export const ButtonDivider = styled.div`
    height: 35px;
    width: 15px;
`;

type EmptySpaceProps = {
    size: number
}

export const EmptySpace = styled.div`
    width: 100%;
    height: ${(props: EmptySpaceProps) => `${props.size}px`};
`;

type DefaultInputProps = {
    size: number
}

export const DefInput = styled.input`
    border: 1px solid #ebebeb;
    border-radius: 20px;
    height: 35px;
    padding: 0 10px;
    font-size:0.9em;
    &:focus {
        outline: none;
    }
`;

export const SearchInput = styled(DefInput)`
    width: ${(props: DefaultInputProps) => `${props.size}%`};
`;

export const SimplestButton = styled.button`
    border: none;
    background: none;
    height: 35px;
    font-weight: bold;
    &:hover {
        color: green;
    }
`;

export const SimplestButtonMini = styled(SimplestButton)`
    font-size: 0.8em;
    text-decoration: underline;
`;

export const MiniIcons = styled.div`
    padding-top: 5px;
    width: 80px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 5px;
`