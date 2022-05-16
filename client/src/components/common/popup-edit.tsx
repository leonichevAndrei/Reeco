import { Fragment, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { updateCurrentOrder } from "../../redux/features/orders/order-slice";
import { RootState, store } from "../../redux/store";
import { getIDKeysArray } from "../../utill/get-arrays";
import { inputNumsOnly } from "../../utill/input-checks";
import { WhiteButton, ButtonDivider, GreenButton } from "../styled/common";
import { PopTop, PopClose, PopCloseIcon, PopMiddle, PopTitle, PopCompany, PopMain, PopImageBox, PopImg, PopMainBox, PopMainLine, PopLineTitle, PopPlus, PopLineInput, PopInput, PopLinePlus, PopPlusButton, PopChooseTop, ReasonBold, ReasonGrey, PopReason, PopReasSelect, PopBottom, PopLinePlusChange } from "../styled/popup";
import PopupCommon from "./popup-common";

const reasonsObj = {
    "missing-product": "Missing Product",
    "quantity-not-same": "Quantity is not the same",
    "price-not-same": "Price is not the same",
    "other": "Other"
}
const reasonsObjKeys = Object.keys(reasonsObj);
const reasonsObjVals = Object.values(reasonsObj);

type PopupEditProps = {
    show: boolean,
    closeHandler: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PopupEdit(props: PopupEditProps) {

    const { show, closeHandler } = props;

    const orderState = useSelector((state: RootState) => state.order);
    const products = useSelector((state: RootState) => state.products.productsArr);
    const productsById = useMemo(() => getIDKeysArray(products), [products]);
    const [itemsById, setItemsById] = useState(new Array());
    const [priceInput, setPriceInput] = useState("");
    const [quantityInput, setQuantityInput] = useState("");
    const [reason, setReason] = useState("");

    useEffect(() => {
        if (orderState.currentOrder.items !== undefined && orderState.currentItemID !== -1) {
            setItemsById(getIDKeysArray(orderState.currentOrder.items));
        }
    }, [orderState]);

    useEffect(() => {
        if (itemsById.length > 0) {
            setPriceInput(itemsById[orderState.currentItemID].price);
            setQuantityInput(itemsById[orderState.currentItemID].quantity);
            setReason(itemsById[orderState.currentItemID].updReason);
        }
    }, [itemsById]);

    useEffect(() => {
        if (itemsById.length > 0 && orderState.currentItemID !== -1) {
            if (itemsById[orderState.currentItemID].price == priceInput
                && itemsById[orderState.currentItemID].quantity == quantityInput) {
                if (itemsById[orderState.currentItemID].updReason === "") {
                    setReason("");
                }
            }
        }
    });

    function generateNewItem() {
        if (itemsById.length > 0 && orderState.currentItemID !== -1) {
            const updated = new Array();
            if (itemsById[orderState.currentItemID].price != priceInput) {
                updated.push("price");
            }
            if (itemsById[orderState.currentItemID].quantity != quantityInput) {
                updated.push("quantity");
            }
            return {
                ...itemsById[orderState.currentItemID],
                "price": parseInt(priceInput),
                "quantity": parseInt(quantityInput),
                "updated": updated,
                "updReason": reason
            };
        }
        return {};
    }

    return (
        <Fragment>
            {itemsById.length > 0 &&
                <PopupCommon size={60} show={show} closeHandler={closeHandler}>
                    <PopTop>
                        <PopClose>
                            <PopCloseIcon onClick={() => closeHandler(false)} size={26} />
                        </PopClose>
                    </PopTop>
                    <PopMiddle>
                        <PopTitle>{productsById[itemsById[orderState.currentItemID].productID].name}</PopTitle>
                        <PopCompany>{productsById[itemsById[orderState.currentItemID].productID].brand}</PopCompany>
                        <PopMain>
                            <PopImageBox>
                                <PopImg src={`/assets/images/${productsById[itemsById[orderState.currentItemID].productID].image}`} />
                            </PopImageBox>
                            <PopMainBox>
                                <PopMainLine>
                                    <PopLineTitle>Price ($)</PopLineTitle>
                                    <PopPlus />
                                    <PopLineInput>
                                        <PopInput
                                            size={100}
                                            value={priceInput}
                                            onInput={(e) => inputNumsOnly(e.currentTarget.value, setPriceInput)}
                                        />
                                    </PopLineInput>
                                    <PopLinePlusChange>
                                        {itemsById[orderState.currentItemID].price != priceInput && "(changed)"}
                                    </PopLinePlusChange>
                                </PopMainLine>
                                <PopMainLine>
                                    <PopLineTitle>Quantity</PopLineTitle>
                                    <PopPlus>
                                        <PopPlusButton
                                            onClick={() => parseInt(quantityInput) > 0
                                                ? setQuantityInput((parseInt(quantityInput) - 1).toString())
                                                : void (0)}
                                        >-</PopPlusButton>
                                    </PopPlus>
                                    <PopLineInput>
                                        <PopInput
                                            size={100}
                                            value={quantityInput}
                                            onInput={(e) => inputNumsOnly(e.currentTarget.value, setQuantityInput)}
                                        />
                                    </PopLineInput>
                                    <PopPlus>
                                        <PopPlusButton
                                            onClick={() => setQuantityInput((parseInt(quantityInput) + 1).toString())}
                                        >+</PopPlusButton>
                                    </PopPlus>
                                    <PopLinePlusChange>
                                        {itemsById[orderState.currentItemID].quantity != quantityInput && "(changed)"}
                                    </PopLinePlusChange>
                                </PopMainLine>
                                <PopMainLine>
                                    <PopLineTitle>Total</PopLineTitle>
                                    <PopPlus />
                                    <PopLinePlus>${parseInt(priceInput) * parseInt(quantityInput)}</PopLinePlus>
                                </PopMainLine>
                            </PopMainBox>
                        </PopMain>
                        <PopChooseTop>
                            <ReasonBold>Choose reason</ReasonBold>
                            <ReasonGrey> (optional)</ReasonGrey>
                        </PopChooseTop>
                        <PopReason>
                            {reasonsObjKeys.map((elm, i) => {
                                return <PopReasSelect key={i} onClick={() => {
                                    if (itemsById[orderState.currentItemID].price != priceInput
                                        || itemsById[orderState.currentItemID].quantity != quantityInput
                                        || itemsById[orderState.currentItemID].updReason !== "") {
                                        reason === elm ? setReason("") : setReason(elm);
                                    } else {
                                        alert("You cannot select a reason until the PRICE and/or QUANTITY changes");
                                    }
                                }} active={reason === elm}>{reasonsObjVals[i]}</PopReasSelect>;
                            })}
                        </PopReason>
                    </PopMiddle>
                    <PopBottom>
                        <WhiteButton onClick={() => closeHandler(false)} >Cancel</WhiteButton>
                        <ButtonDivider />
                        <GreenButton onClick={() => {
                            store.dispatch(updateCurrentOrder({
                                type: "order/updateItem/replaceItem",
                                order: orderState.currentOrder,
                                itemID: orderState.currentItemID,
                                payload: generateNewItem()
                            }))
                            setTimeout(() => closeHandler(false), 10);
                        }}>Send</GreenButton>
                    </PopBottom>
                </PopupCommon>
            }
        </Fragment>
    );
}