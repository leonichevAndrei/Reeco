import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BodyBlock, BodyInnerBlock } from "../styled/order-body";
import { SubNav, SubNavTop, SNLink, SubNavBottom, OrderNumber } from "../styled/sub-nav";
import { templateOrder, templateOrderClean } from "../../settings/template-orders";
import { useDispatch } from "react-redux";
import { addOrder, removeOrder } from "../../redux/features/orders/orders-slice";
import { ListTitle, EmptySpace, ListItem, ListItemIn, SimplestButtonMini, WhiteButton } from "../styled/common";

export default function Orders() {

    const ordersIDs = useSelector((state: RootState) => state.orders.orderIDs);
    const dispatch: any = useDispatch();

    return (
        <Fragment>
            <SubNav style={{ boxShadow: "0 -10px 20px" }}>
                <SubNavTop>
                    <SNLink to="/orders">Orders</SNLink>
                </SubNavTop>
                <SubNavBottom>
                    <OrderNumber>Orders</OrderNumber>
                </SubNavBottom>
            </SubNav>
            <BodyBlock>
                <BodyInnerBlock>
                    <ListTitle>List of all Orders:</ListTitle>
                    <EmptySpace size={5} />
                    {ordersIDs.length > 0 && ordersIDs.map((elm: any, i: any) => {
                        return (
                            <ListItem key={i}>
                                <ListItemIn to={`/order/${elm}`}>Open order #{elm}</ListItemIn>
                                <SimplestButtonMini onClick={() => dispatch(removeOrder(elm))}>Delete</SimplestButtonMini>
                            </ListItem>
                        )
                    })}
                    <EmptySpace size={20} />
                    <WhiteButton onClick={() => dispatch(addOrder(templateOrder))}>Add dummy order</WhiteButton>
                    <EmptySpace size={10} />
                    <WhiteButton onClick={() => dispatch(addOrder(templateOrderClean))}>Add clean order</WhiteButton>
                </BodyInnerBlock>
            </BodyBlock>
        </Fragment>
    );
}