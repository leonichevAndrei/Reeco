import { PopupWrap, PopupBack, PopupBackDark, PopupBlock, PopupTop, PopupMid, PopupMidLt, Popup, PopupMidRt, PopupBott } from "../styled/popup";

type PopupDialogProps = { 
    size: number,
    show: boolean, 
    closeHandler: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
}

export default function PopupCommon(props: PopupDialogProps) {

    const { size, show, closeHandler, children } = props;

    return (
        <PopupWrap show={show}>
            <PopupBack />
            <PopupBackDark />
            <PopupBlock>
                <PopupTop onClick={() => closeHandler(false)} />
                <PopupMid>
                    <PopupMidLt onClick={() => closeHandler(false)} />
                    <Popup size={size}>

                        {children}

                    </Popup>
                    <PopupMidRt onClick={() => closeHandler(false)} />
                </PopupMid>
                <PopupBott onClick={() => closeHandler(false)} />
            </PopupBlock>
        </PopupWrap>
    );
}