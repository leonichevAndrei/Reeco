import { SubNav, SubNavTop, SNLink, SubNavBottom, OrderNumber } from "../styled/sub-nav";

export default function Analytics() {

    return (
        <SubNav style={{boxShadow: "0 -10px 20px"}}>
            <SubNavTop>
                <SNLink to="/analytics">Analytics</SNLink>
            </SubNavTop>
            <SubNavBottom>
                <OrderNumber>Analytics page</OrderNumber>
            </SubNavBottom>
        </SubNav>
    );
}