import { useState } from "react";
import { Basket, BasketIcon, MyLink, MyLinks, Logo, Nav, BasketLink, BasketCount } from "../styled/navbar";
import Dropdown from "./dropdown";
import { useLocation } from 'react-router-dom'

export default function Navbar() {

    const location = useLocation().pathname;
    const [page, setPage] = useState(location);
    console.log(location);

    return (
        <Nav>
            <Logo>Reeco</Logo>
            <MyLinks>
                <MyLink active={page === "/store"} to={"/store"} onClick={() => setPage("/store")}>Store</MyLink>
                <MyLink active={/^\/order(s\/[\d]*)?/.test(location)} to="/orders" onClick={() => setPage("/orders")}>Orders</MyLink>
                <MyLink active={page === "/analytics"} to="/analytics" onClick={() => setPage("/analytics")}>Analytics</MyLink>
            </MyLinks>
            <Basket>
                <BasketLink to="/basket" onClick={() => setPage("/basket")}>
                    <BasketIcon size={22} /><BasketCount>5</BasketCount>
                </BasketLink>
            </Basket>
            <Dropdown text="Hello, James" list={["Action one", "Next action", "Final option"]} />
        </Nav>
    );
}