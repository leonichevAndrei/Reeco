import { Fragment, useState } from "react";
import PopupAdd from "../common/popup-add";
import PopupDialog from "../common/popup-dialog";
import PopupEdit from "../common/popup-edit";
import { Page } from "../styled/common";
import OrderBody from "./order-body";
import OrderInfo from "./order-info";

export default function OrderApprovement() {

    const [showPopupAdd, setShowPopupAdd] = useState(false);
    const [showPopupEdit, setShowPopupEdit] = useState(false);
    const [showPopupDial, setShowPopupDial] = useState(false);

    return (
        <Fragment>
            <PopupAdd show={showPopupAdd} closeHandler={setShowPopupAdd} />
            <PopupEdit show={showPopupEdit} closeHandler={setShowPopupEdit} />
            <PopupDialog show={showPopupDial} closeHandler={setShowPopupDial} />
            <Page>
                <OrderInfo />
                <OrderBody
                    addPopupHandler={setShowPopupAdd}
                    editPopupHandler={setShowPopupEdit}
                    dialPopupHandler={setShowPopupDial}
                />
            </Page>
        </Fragment>
    );
}