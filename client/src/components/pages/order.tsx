import SubNavComponent from "../common/sub-nav-comp";
import OrderApprovement from "../order/order-approve";
import { Fragment } from "react";

export default function Order() {

    return (
        <Fragment>
            <SubNavComponent />
            <OrderApprovement />
        </Fragment>
    )
}