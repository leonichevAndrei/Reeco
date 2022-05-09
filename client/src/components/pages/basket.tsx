import { Fragment } from "react";
import { BodyBlock, BodyInnerBlock } from "../styled/order-body";
import { SubNav, SubNavTop, SNLink, SubNavBottom, OrderNumber } from "../styled/sub-nav";

export default function Basket() {

    return (
        <Fragment>
            <SubNav style={{ boxShadow: "0 -10px 20px" }}>
                <SubNavTop>
                    <SNLink to="/basket">Basket</SNLink>
                </SubNavTop>
                <SubNavBottom>
                    <OrderNumber>Basket</OrderNumber>
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