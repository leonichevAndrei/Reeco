import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setItemID, updateCurrentOrder } from "../../redux/features/orders/orderSlice";
import { RootState, store } from "../../redux/store";
import { getIDKeysArray } from "../../utill/getIDKeysArray";
import { SearchInput, WhiteButton } from "../styled/common";
import { BodyBlock, BodyInnerBlock, BodyTop, SearchBlock, AdditionalBlock, AddItem, PrintOrder, PrintOrderIcon, BodyMain, BodyTable, OrderTableTh, OrderColumnTh, OrderTableItem, OrderColumn, OrdImage, OCThInside, OCInside, Status, StatusEdit, StatusEditLink, StatusMess, StatusOK, StatusOKIcon, StatusX, StatusXIcon, StatusBlock } from "../styled/order-body";

type SetType = React.Dispatch<React.SetStateAction<boolean>>;
type OrderBodyProps = {
    addPopupHandler: SetType,
    editPopupHandler: SetType,
    dialPopupHandler: SetType
}

export default function OrderBody(props: OrderBodyProps) {

    const { addPopupHandler, editPopupHandler, dialPopupHandler } = props;

    const [searchInp, setSearchInp] = useState("");
    const order = useSelector((store: RootState) => store.order.currentOrder);
    const products = useSelector((store: RootState) => store.products.productsArr);
    const productsById = useMemo(() => getIDKeysArray(products), [products]);
    const dispatch = useDispatch();

    function getProductStatus(status: string, updated: string[]) {
        switch (status) {
            case "approved": return getApprovedStatus(updated); break;
            case "missing": return "Missing"; break;
            case "missing-urgent": return "Missing - Urgent"; break;
            default: return "";
        }
    }

    function getApprovedStatus(updated: string[]) {
        if (updated.length === 2) {
            return "Quantity and Price updated";
        } else if (updated.indexOf("price") !== -1) {
            return "Price updated";
        } else if (updated.indexOf("quantity") !== -1) {
            return "Quantity updated";
        } else {
            return "Approved";
        }
    }

    return (
        <BodyBlock>
            <BodyInnerBlock>
                <BodyTop>
                    <SearchBlock>
                        <SearchInput value={searchInp} onInput={(e) => setSearchInp(e.currentTarget.value)} size={100} placeholder="Search..." />
                    </SearchBlock>
                    <AdditionalBlock>
                        <AddItem>
                            <WhiteButton onClick={() => addPopupHandler(true)}>Add item</WhiteButton>
                        </AddItem>
                        <PrintOrder>
                            <PrintOrderIcon size={24} onClick={() => alert("Printing...")} />
                        </PrintOrder>
                    </AdditionalBlock>
                </BodyTop>
                <BodyMain>
                    <BodyTable>
                        <OrderTableTh>
                            <OrderColumnTh><OCThInside corner="left">&nbsp;</OCThInside></OrderColumnTh>
                            <OrderColumnTh><OCThInside corner="">Product name</OCThInside></OrderColumnTh>
                            <OrderColumnTh><OCThInside corner="">Brand</OCThInside></OrderColumnTh>
                            <OrderColumnTh><OCThInside corner="">Price</OCThInside></OrderColumnTh>
                            <OrderColumnTh><OCThInside corner="">Quantity</OCThInside></OrderColumnTh>
                            <OrderColumnTh><OCThInside corner="">Total</OCThInside></OrderColumnTh>
                            <OrderColumnTh><OCThInside corner="right">Status</OCThInside></OrderColumnTh>
                        </OrderTableTh>
                        {
                            order.items !== undefined &&
                            products.length > 0 &&
                            productsById.length > 0 &&
                            order.items.map((elm: any, i: number) => {
                                return (
                                    <OrderTableItem key={i}>
                                        <OrderColumn>
                                            <OCInside side="left" corner={i === order.items.length - 1 ? "left" : ""}>
                                                <OrdImage src={`/assets/images/${productsById[elm.productID].image}`} />
                                            </OCInside>
                                        </OrderColumn>
                                        <OrderColumn><OCInside side="" corner="">{productsById[elm.productID].name}</OCInside></OrderColumn>
                                        <OrderColumn><OCInside side="" corner="">{productsById[elm.productID].brand}</OCInside></OrderColumn>
                                        <OrderColumn><OCInside side="" corner="">${elm.price}</OCInside></OrderColumn>
                                        <OrderColumn><OCInside side="" corner="">{elm.quantity}</OCInside></OrderColumn>
                                        <OrderColumn><OCInside side="" corner="">${elm.price * elm.quantity}</OCInside></OrderColumn>
                                        <OrderColumn>
                                            <OCInside style={{ minWidth: "250px" }} side="right" corner={i === order.items.length - 1 ? "right" : ""}>
                                                <StatusBlock>
                                                    <Status>
                                                        <StatusMess type={elm.status}>{getProductStatus(elm.status, elm.updated)}</StatusMess>
                                                    </Status>
                                                    <StatusOK onClick={() => store.dispatch(updateCurrentOrder({
                                                        type: "order/updateItem/setApproved",
                                                        order: order,
                                                        itemID: elm.id
                                                    }))}>
                                                        <StatusOKIcon color={elm.status === "approved" ? "#00cc00" : "#aaaaaa"} size={24} />
                                                    </StatusOK>
                                                    <StatusX onClick={() => {
                                                        dispatch(setItemID(elm.id));
                                                        if (elm.status !== "missing" && elm.status !== "missing-urgent") {
                                                            dialPopupHandler(true);
                                                        } else {
                                                            store.dispatch(updateCurrentOrder({
                                                                type: "order/updateItem/setNone",
                                                                order: order,
                                                                itemID: elm.id
                                                            }));
                                                        }
                                                    }}>
                                                        <StatusXIcon color={elm.status === "missing" || elm.status === "missing-urgent" ? "#cc0000" : "#aaaaaa"} size={30} />
                                                    </StatusX>
                                                    <StatusEdit>
                                                        <StatusEditLink onClick={() => editPopupHandler(true)}>Edit</StatusEditLink>
                                                    </StatusEdit>
                                                </StatusBlock>
                                            </OCInside>
                                        </OrderColumn>
                                    </OrderTableItem>
                                );
                            })}
                    </BodyTable>
                </BodyMain>
            </BodyInnerBlock>
        </BodyBlock>
    );
}