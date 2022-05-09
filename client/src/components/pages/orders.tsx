import { Fragment, useState } from "react";
import { EmptySpace, ListItem, ListTitle, WhiteButton } from "../styled/common";
import { BodyBlock, BodyInnerBlock } from "../styled/order-body";
import { SubNav, SubNavTop, SNLink, SubNavBottom, OrderNumber } from "../styled/sub-nav";

const DUMMY_ORDER = 99;
const INIT_ORDERS = [1,2,3,4,5,6,7,8];

export default function Orders() {

    const [orders, setOrders] = useState(INIT_ORDERS);

    function addDummyOrder() {
        setOrders([...orders, DUMMY_ORDER]);
    }

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
                    <ListTitle>Non approved orders List:</ListTitle>
                    <EmptySpace size={5} />
                    {orders.map((elm, i) => {
                        return <ListItem to={`/order/${elm}`}>Open order #{elm}</ListItem>
                    })}
                    <EmptySpace size={20} />
                    <WhiteButton onClick={() => addDummyOrder()}>Add dummy order</WhiteButton>
                </BodyInnerBlock>
            </BodyBlock>
        </Fragment>
    );
}