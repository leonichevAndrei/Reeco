import { WhiteButton, GreenButton } from "../styled/common";
import { OrderButtons, OrderNumber, SNLink, SubNav, SubNavBottom, SubNavTop } from "../styled/sub-nav";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, store } from "../../redux/store";
import { updateCurrentOrder } from "../../redux/features/orders/order-slice";

export default function SubNavComponent(props: any) {

    const { orderId } = props;

    const order = useSelector((store: RootState) => store.order.currentOrder);
    const navigate = useNavigate();

    return (
        <SubNav style={{ boxShadow: "0 -10px 20px" }}>
            <SubNavTop>
                <SNLink to="/orders">Orders</SNLink> &gt; <SNLink to="/order/1">Order #{orderId}</SNLink>
            </SubNavTop>
            <SubNavBottom>
                <OrderNumber>Order 32457ABC</OrderNumber>
                <OrderButtons>
                    <WhiteButton onClick={() => navigate("/orders")}>Back</WhiteButton>
                    <GreenButton onClick={() => {
                        store.dispatch(updateCurrentOrder({
                            type: "order/updateOrder/changeStatus",
                            order: order
                        }));
                    }}>{order.status === "awaiting" ? "Approve Order" : "Cancel Order"}</GreenButton>
                </OrderButtons>
            </SubNavBottom>
        </SubNav>
    );
}