import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { InfoBlock, InfoPart, InfoTitle, InfoText, InfoInnerBlock } from "../styled/order-info";
import { titleArray, status, dayOfWeek, months } from "../../settings/settings";
import { Alarm, Boxes, ChatHeart, CloudDrizzle, Disc, Eraser, Flower1, Gift } from "react-bootstrap-icons";
import { MiniIcons } from "../styled/common";

export default function OrderInfo() {

    const order = useSelector((store: RootState) => store.order.currentOrder);

    const icons = (
        <MiniIcons>
            <Alarm /><Boxes /><ChatHeart /><CloudDrizzle />
            <Disc /><Eraser /><Flower1 /><Gift />
        </MiniIcons>);

    function getInfo(key: string, i: number) {
        let result = <></>;
        switch (key) {
            case "shippingDate": {
                const date = new Date(order[key]);
                const dateString = `${dayOfWeek[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
                result = <>{dateString}</>; break;
            }
            case "total": result = <>${order[key]}</>; break;
            case "categoryIDs": result = icons; break;
            case "status": result = order[key] === "awaiting" ? <>{status.awaiting}</> : <>{status.approved}</>; break;
            default: result = <>{order[key]}</>;
        }
        return result;
    }

    return (
        <InfoBlock>
            <InfoInnerBlock>
                {Object.keys(order).map((key: any, i: any) => {
                    return (
                        key !== "id" && key !== "items" &&
                        <>
                            <InfoPart key={i} needDivider={i !== 6}>
                                <InfoTitle>{titleArray[i]}:</InfoTitle>
                                <InfoText>{getInfo(key, i)}</InfoText>
                            </InfoPart>
                        </>
                    );
                })}
            </InfoInnerBlock>
        </InfoBlock>
    );
}