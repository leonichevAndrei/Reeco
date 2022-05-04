import { Page } from "../styled/common";
import OrderBody from "./order-body";
import OrderInfo from "./order-info";

export default function OrderApprovement() {
    return (
        <Page>
            <OrderInfo />
            <OrderBody />
        </Page>
    );
}