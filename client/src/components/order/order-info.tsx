import { InfoBlock, InfoPart, InfoTitle, InfoText, InfoInnerBlock } from "../styled/order-info";

export default function OrderInfo() {

    return (
        <InfoBlock>
            <InfoInnerBlock>
                {[1, 2, 3, 4, 5, 6].map((elm, i) => {
                    return (
                        <>
                        <InfoPart needDivider={i !== 5}>
                            <InfoTitle>Supplier:</InfoTitle>
                            <InfoText>East Coast Fruits &#38; Vegetables</InfoText>
                        </InfoPart>
                        </>
                    );
                })}
            </InfoInnerBlock>
        </InfoBlock>
    );
}