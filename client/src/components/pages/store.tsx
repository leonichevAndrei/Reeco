import { SubNav, SubNavTop, SNLink, SubNavBottom, OrderNumber } from "../styled/sub-nav";

export default function Store() {

    return (
        <SubNav style={{boxShadow: "0 -10px 20px"}}>
            <SubNavTop>
                <SNLink to="/store">Store</SNLink>
            </SubNavTop>
            <SubNavBottom>
                <OrderNumber>Store page</OrderNumber>
            </SubNavBottom>
        </SubNav>
    );
}