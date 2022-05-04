import { Link } from "react-router-dom";
import styled from "styled-components";

export const SubNav = styled.div`
    background-color: white;
    padding: 10px 10vw;
    box-shadow: 2px;
`;

export const SubNavTop = styled.div`
    padding-bottom: 10px;
    font-size: 0.8em;
    color: #707070;
`;

export const SNLink = styled(Link)`
    color: inherit;
    &:hover {
        color: #707070;
    }
`;

export const SubNavBottom = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

export const OrderNumber = styled.div`
    width: 50%;
    font-size: 1.4em;
    font-weight: bold;
`;

export const OrderButtons = styled.div`
    width: 50%;
    display: flex;
    justify-content: right;
    gap: 15px;
`;