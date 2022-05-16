import SubNavComponent from "../common/sub-nav-comp";
import OrderApprovement from "../order/order-approve";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { store } from "../../redux/store";
import { fetchCurrentOrder } from "../../redux/features/orders/order-slice";

export default function Order() {

    let { orderId } = useParams();

    useEffect(() => {
        store.dispatch(fetchCurrentOrder(orderId));
    }, [orderId]);

    return (
        <Fragment>
            <SubNavComponent orderId={orderId} />
            <OrderApprovement />
        </Fragment>
    )
}