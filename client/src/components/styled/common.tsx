import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: #ebebeb;
`;

export const UnderConst = styled.div`
    padding: 5vh 0;
`;

export const UCTitle = styled.h3`
`;

export const ListTitle = styled.h3`
`;

export const ListItem = styled(Link)`
    font-size: 1.2em;
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
`;

export const GreenButton = styled(DefButton)`
    border-color: #336242;
    background-color: #336242;
    color: white;
`;