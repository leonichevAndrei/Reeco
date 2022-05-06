import { Fragment } from "react";
import PopupDialog from "../common/popup-dialog";
import PopupEdit from "../common/popup-edit";
import { Page } from "../styled/common";
import OrderBody from "./order-body";
import OrderInfo from "./order-info";

export default function OrderApprovement() {
    return (
        <Fragment>
            <PopupEdit show={false} />
            <PopupDialog show={true} />
            <Page>
                <OrderInfo />
                <OrderBody />
            </Page>
        </Fragment>
    );
}