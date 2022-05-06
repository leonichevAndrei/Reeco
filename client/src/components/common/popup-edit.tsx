import { ButtonDivider, GreenButton, WhiteButton } from "../styled/common";
import { PopupBlock, PopupTop, PopupMid, PopupMidLt, Popup, PopupMidRt, PopupBott, PopupBack, PopBottom, PopClose, PopCloseIcon, PopMiddle, PopTop, PopupBackDark, PopupWrap, PopChooseTop, PopCompany, PopImageBox, PopImg, PopInput, PopLineInput, PopLinePlus, PopLineTitle, PopMain, PopMainBox, PopMainLine, PopPlus, PopPlusButton, PopReason, PopReasSelect, PopTitle, ReasonBold, ReasonGrey } from "../styled/popup";

export default function PopupEdit(props: { show: boolean }) {

    const { show } = props;

    return (
        <PopupWrap show={show}>
            <PopupBack />
            <PopupBackDark />
            <PopupBlock>
                <PopupTop onClick={() => { }} />
                <PopupMid>
                    <PopupMidLt onClick={() => { }} />
                    <Popup size={50}>
                        <PopTop>
                            <PopClose>
                                <PopCloseIcon onClick={() => { alert("close") }} size={26} />
                            </PopClose>
                        </PopTop>
                        <PopMiddle>
                            <PopTitle>Chicken Breast Fillets, Boneless Marinated 6 Ounce Raw, Invivid</PopTitle>
                            <PopCompany>American Roland</PopCompany>
                            <PopMain>
                                <PopImageBox>
                                    <PopImg src="/assets/images/avocado.jpg" />
                                </PopImageBox>
                                <PopMainBox>
                                    <PopMainLine>
                                        <PopLineTitle>Price ($)</PopLineTitle>
                                        <PopPlus />
                                        <PopLineInput>
                                            <PopInput value="9999.99" />
                                        </PopLineInput>
                                        <PopLinePlus> / 6 * 1LB</PopLinePlus>
                                    </PopMainLine>
                                    <PopMainLine>
                                        <PopLineTitle>Quantity</PopLineTitle>
                                        <PopPlus>
                                            <PopPlusButton>-</PopPlusButton>
                                        </PopPlus>
                                        <PopLineInput>
                                            <PopInput value="9998" />
                                        </PopLineInput>
                                        <PopPlus>
                                            <PopPlusButton>+</PopPlusButton>
                                        </PopPlus>
                                        <PopLinePlus> x 6 * 1LB</PopLinePlus>
                                    </PopMainLine>
                                    <PopMainLine>
                                        <PopLineTitle>Total</PopLineTitle>
                                        <PopPlus />
                                        <PopLinePlus>$9.997.000.02</PopLinePlus>
                                    </PopMainLine>
                                </PopMainBox>
                            </PopMain>
                            <PopChooseTop>
                                <ReasonBold>Choose reason</ReasonBold>
                                <ReasonGrey> (optional)</ReasonGrey>
                            </PopChooseTop>
                            <PopReason>
                                <PopReasSelect>Missing product</PopReasSelect>
                                <PopReasSelect>Quantity is not the same</PopReasSelect>
                                <PopReasSelect>Price is not the same</PopReasSelect>
                                <PopReasSelect>Other</PopReasSelect>
                            </PopReason>
                        </PopMiddle>
                        <PopBottom>
                            <WhiteButton>Cancel</WhiteButton>
                            <ButtonDivider />
                            <GreenButton>Send</GreenButton>
                        </PopBottom>
                    </Popup>
                    <PopupMidRt onClick={() => { }} />
                </PopupMid>
                <PopupBott onClick={() => { }} />
            </PopupBlock>
        </PopupWrap>
    );
}

