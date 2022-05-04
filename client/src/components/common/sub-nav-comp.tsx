import { WhiteButton, GreenButton } from "../styled/common";
import { OrderButtons, OrderNumber, SNLink, SubNav, SubNavBottom, SubNavTop } from "../styled/sub-nav";

export default function SubNavComponent() {
    return (
        <SubNav style={{boxShadow: "0 -10px 20px"}}>
            <SubNavTop>
                Orders &gt; <SNLink to="/order/1">Order 32457ABC</SNLink>
            </SubNavTop>
            <SubNavBottom>
                <OrderNumber>Order 32457ABC</OrderNumber>
                <OrderButtons>
                    <WhiteButton>Back</WhiteButton>
                    <GreenButton>Approve Order</GreenButton>
                </OrderButtons>
            </SubNavBottom>
        </SubNav>
    );
}