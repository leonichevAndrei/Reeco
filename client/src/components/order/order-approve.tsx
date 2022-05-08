import { Fragment, useState } from "react";
import PopupDialog from "../common/popup-dialog";
import PopupEdit from "../common/popup-edit";
import { Page } from "../styled/common";
import OrderBody from "./order-body";
import OrderInfo from "./order-info";

export default function OrderApprovement() {

    const [showPopupEdit, setShowPopupEdit] = useState(false);
    const [showPopupDial, setShowPopupDial] = useState(false);

    return (
        <Fragment>
            <PopupEdit show={showPopupEdit} closeHandler={setShowPopupEdit} />
            <PopupDialog show={showPopupDial} closeHandler={setShowPopupDial} />
            <Page>
                <OrderInfo />
                <OrderBody editPopupHandler={setShowPopupEdit} dialPopupHandler={setShowPopupDial} />
            </Page>
        </Fragment>
    );
}