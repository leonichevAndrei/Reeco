import { ButtonDivider, SimplestButton } from "../styled/common";
import { PopupWrap, PopupBack, PopupBackDark, PopupBlock, PopupTop, PopupMid, PopupMidLt, Popup, PopupMidRt, PopupBott, PopCloseIcon, DialClose, DialogBottom, DialogMiddle, DialogTop, DialogWindow, DialTitle } from "../styled/popup";

type PopupDialogProps = { 
    show: boolean, 
    closeHandler: React.Dispatch<React.SetStateAction<boolean>> 
}

export default function PopupDialog(props: PopupDialogProps) {

    const { show, closeHandler } = props;

    return (
        <PopupWrap show={show}>
            <PopupBack />
            <PopupBackDark />
            <PopupBlock>
                <PopupTop onClick={() => closeHandler(false)} />
                <PopupMid>
                    <PopupMidLt onClick={() => closeHandler(false)} />
                    <Popup size={30}>

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

                    </Popup>
                    <PopupMidRt onClick={() => closeHandler(false)} />
                </PopupMid>
                <PopupBott onClick={() => closeHandler(false)} />
            </PopupBlock>
        </PopupWrap>
    );
}