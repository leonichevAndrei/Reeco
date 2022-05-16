import { updateCurrentOrder } from "../../redux/features/orders/order-slice";
import { store } from "../../redux/store";
import { SimplestButton, ButtonDivider } from "../styled/common";
import { DialogWindow, DialogTop, DialTitle, DialClose, PopCloseIcon, DialogMiddle, DialogBottom } from "../styled/popup";
import PopupCommon from "./popup-common";

type PopupDialogProps = {
    show: boolean,
    closeHandler: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PopupDialog(props: PopupDialogProps) {

    const { show, closeHandler } = props;

    return (
        <PopupCommon size={30} show={show} closeHandler={closeHandler}>
            <DialogWindow>
                <DialogTop>
                    <DialTitle>Missing product</DialTitle>
                    <DialClose>
                        <PopCloseIcon onClick={() => closeHandler(false)} size={26} />
                    </DialClose>
                </DialogTop>
                <DialogMiddle>
                    Is "Chicken Breasts Fillets, Boneless..." urgent?
                </DialogMiddle>
                <DialogBottom>
                    <SimplestButton onClick={() => {
                        store.dispatch(updateCurrentOrder({
                            type: "order/updateItem/setMissing",
                            order: store.getState().order.currentOrder,
                            itemID: store.getState().order.currentItemID
                        }));
                        setTimeout (() => closeHandler(false), 10);
                    }}>No</SimplestButton>
                    <ButtonDivider />
                    <SimplestButton onClick={() => {
                        store.dispatch(updateCurrentOrder({
                            type: "order/updateItem/setMissingUrgent",
                            order: store.getState().order.currentOrder,
                            itemID: store.getState().order.currentItemID
                        }));
                        setTimeout (() => closeHandler(false), 10);
                    }}>Yes</SimplestButton>
                </DialogBottom>
            </DialogWindow>
        </PopupCommon>
    );
}