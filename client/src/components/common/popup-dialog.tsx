import { PopupWrap, PopupBack, PopupBackDark, PopupBlock, PopupTop, PopupMid, PopupMidLt, Popup, PopupMidRt, PopupBott } from "../styled/popup";

export default function PopupDialog(props: { show: boolean }) {

    const { show } = props;

    return (
        <PopupWrap show={show}>
            <PopupBack />
            <PopupBackDark />
            <PopupBlock>
                <PopupTop onClick={() => { }} />
                <PopupMid>
                    <PopupMidLt onClick={() => { }} />
                    <Popup size={30}>

                        Popup
                        
                    </Popup>
                    <PopupMidRt onClick={() => { }} />
                </PopupMid>
                <PopupBott onClick={() => { }} />
            </PopupBlock>
        </PopupWrap>
    );
}