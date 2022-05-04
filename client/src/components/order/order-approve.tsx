import { Fragment } from "react";
import OrderBody from "./order-body";
import OrderInfo from "./order-info";

export default function OrderApprovement() {
    return (
        <Fragment>
            <OrderInfo />
            <OrderBody />
        </Fragment>
    );
}