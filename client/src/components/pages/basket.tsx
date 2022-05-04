import { SubNav, SubNavTop, SNLink, SubNavBottom, OrderNumber } from "../styled/sub-nav";

export default function Basket() {

    return (
        <SubNav style={{boxShadow: "0 -10px 20px"}}>
            <SubNavTop>
                <SNLink to="/basket">Basket</SNLink>
            </SubNavTop>
            <SubNavBottom>
                <OrderNumber>Basket page</OrderNumber>
            </SubNavBottom>
        </SubNav>
    );
}