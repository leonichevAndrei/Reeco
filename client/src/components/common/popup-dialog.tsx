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
                    <SimplestButton onClick={() => { alert("no") }}>No</SimplestButton>
                    <ButtonDivider />
                    <SimplestButton onClick={() => { alert("yes") }}>Yes</SimplestButton>
                </DialogBottom>
            </DialogWindow>

        </PopupCommon>
    );
}