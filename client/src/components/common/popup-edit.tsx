import { WhiteButton, ButtonDivider, GreenButton } from "../styled/common";
import { PopTop, PopClose, PopCloseIcon, PopMiddle, PopTitle, PopCompany, PopMain, PopImageBox, PopImg, PopMainBox, PopMainLine, PopLineTitle, PopPlus, PopLineInput, PopInput, PopLinePlus, PopPlusButton, PopChooseTop, ReasonBold, ReasonGrey, PopReason, PopReasSelect, PopBottom } from "../styled/popup";
import PopupCommon from "./popup-common";

type PopupEditProps = {
    show: boolean,
    closeHandler: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PopupEdit(props: PopupEditProps) {

    const { show, closeHandler } = props;

    return (
        <PopupCommon size={50} show={show} closeHandler={closeHandler}>

            <PopTop>
                <PopClose>
                    <PopCloseIcon onClick={() => closeHandler(false)} size={26} />
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
                                <PopInput size={100} value="9999.99" />
                            </PopLineInput>
                            <PopLinePlus> / 6 * 1LB</PopLinePlus>
                        </PopMainLine>
                        <PopMainLine>
                            <PopLineTitle>Quantity</PopLineTitle>
                            <PopPlus>
                                <PopPlusButton>-</PopPlusButton>
                            </PopPlus>
                            <PopLineInput>
                                <PopInput size={100} value="9998" />
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
                <WhiteButton onClick={() => closeHandler(false)} >Cancel</WhiteButton>
                <ButtonDivider />
                <GreenButton>Send</GreenButton>
            </PopBottom>

        </PopupCommon>
    );


}

