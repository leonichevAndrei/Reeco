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