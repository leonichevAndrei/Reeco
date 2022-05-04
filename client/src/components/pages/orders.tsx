import { Fragment } from "react";
import { ListItem } from "../styled/common";
import { BodyBlock, BodyInnerBlock } from "../styled/order-body";
import { SubNav, SubNavTop, SNLink, SubNavBottom, OrderNumber } from "../styled/sub-nav";

export default function Orders() {

    return (
        <Fragment>
            <SubNav style={{ boxShadow: "0 -10px 20px" }}>
                <SubNavTop>
                    <SNLink to="/orders">Orders</SNLink>
                </SubNavTop>
                <SubNavBottom>
                    <OrderNumber>Orders List:</OrderNumber>
                </SubNavBottom>
            </SubNav>
            <BodyBlock>
                <BodyInnerBlock>
                    <ListItem to="/orders/1">To order #1</ListItem>
                </BodyInnerBlock>
            </BodyBlock>
        </Fragment>
    );
}