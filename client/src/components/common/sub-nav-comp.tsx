import { WhiteButton, GreenButton } from "../styled/common";
import { OrderButtons, OrderNumber, SNLink, SubNav, SubNavBottom, SubNavTop } from "../styled/sub-nav";
import { useNavigate } from "react-router-dom";

export default function SubNavComponent(props: any) {

    const { orderId } = props;

    const navigate = useNavigate();

    return (
        <SubNav style={{boxShadow: "0 -10px 20px"}}>
            <SubNavTop>
                <SNLink to="/orders">Orders</SNLink> &gt; <SNLink to="/order/1">Order #{orderId}</SNLink>
            </SubNavTop>
            <SubNavBottom>
                <OrderNumber>Order 32457ABC</OrderNumber>
                <OrderButtons>
                    <WhiteButton onClick={() => navigate("/orders")}>Back</WhiteButton>
                    <GreenButton>Approve Order</GreenButton>
                </OrderButtons>
            </SubNavBottom>
        </SubNav>
    );
}