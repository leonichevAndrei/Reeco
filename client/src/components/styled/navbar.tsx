import styled from "styled-components";
import { Cart3 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Dropdown from "../common/dropdown";

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #336242;
    padding: 1.5vh 10vw 1vh;
`;

export const Logo = styled.div`
    width: 10vw;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
    position: relative;
    top: -3px;
`;

export const MyLinks = styled.div`
    width: 53vw;
    display: flex;
    justify-content: flex-start;
`;

export const MyLink = styled(Link) <any>`
    color: white;
    text-align: center;
    margin: 0 1vw;
    text-decoration: ${props => props.active === true ? "underline" : "none"};
    &:hover {
        color: white;
        text-decoration: underline;
    }
`;

export const Basket = styled.div`
    width: 5vw;
    text-align: center;
`;

export const BasketLink = styled(Link)`
    display: block;
    width: 22px;
    height: 22px;
    cursor: pointer;
    position: relative;
    top: 3px;
`;

export const BasketIcon = styled(Cart3)`
    color: white;
    position: relative;
    top: -3px;
`;

export const BasketCount = styled.div`
    width: 15px;
    height: 15px;
    background-color: #3ea83e;
    color: white;
    font-size: 0.7em;
    line-height: 15px;
    border-radius: 100%;
    position: absolute;
    left: 12px;
    top: -5px;;
`;

export const UserName = styled(Dropdown)`
    width: 12vw;
    text-align: right;
    color: white;
`;