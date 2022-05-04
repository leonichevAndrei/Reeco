import SubNavComponent from "../common/sub-nav-comp";
import { Page } from "../styled/common";
import OrderApprovement from "../order/order-approve";

export default function Order() {

    return (
        <Page>
            <SubNavComponent />
            <OrderApprovement />
        </Page>
    )
}