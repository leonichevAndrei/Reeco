import { Fragment } from "react";
import { BodyBlock, BodyInnerBlock } from "../styled/order-body";
import { SubNav, SubNavTop, SNLink, SubNavBottom, OrderNumber } from "../styled/sub-nav";

export default function Store() {

    return (
        <Fragment>
            <SubNav style={{ boxShadow: "0 -10px 20px" }}>
                <SubNavTop>
                    <SNLink to="/store">Store</SNLink>
                </SubNavTop>
                <SubNavBottom>
                    <OrderNumber>Store</OrderNumber>
                </SubNavBottom>
            </SubNav>
            <BodyBlock>
                <BodyInnerBlock>
                    Under construction...
                </BodyInnerBlock>
            </BodyBlock>
        </Fragment>
    );
}