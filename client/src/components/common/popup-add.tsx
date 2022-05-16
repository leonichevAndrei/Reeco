import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getIDKeysArray } from "../../utill/get-arrays";
import { inputPriceAddPopup, inputQuantityAddPopup } from "../../utill/input-checks";
import { searchFilterCheck } from "../../utill/search-utills";
import { SearchInput, GreyButton, Bold, GreenButton, ButtonDivider } from "../styled/common";
import { BodyTable, OrderTableTh, OrderColumnTh, OCThInside, OrderTableItem, OrderColumn, OCInside, OrdImage } from "../styled/order-body";
import { PopTop, PopClose, PopCloseIcon, PopTopTitle, PopLine, PopLineIn, PopMiddleAdd, PopSearchBlock, PopSearchTitle, PopSearchEmpty, PopSearchEmptyIcon, PopSearchResults, PopInput, PopBottomCount, PopBottomAdd, PopBottomButtons } from "../styled/popup";
import PopupCommon from "./popup-common";

type PopupEditProps = {
    show: boolean,
    closeHandler: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PopupAdd(props: PopupEditProps) {

    const { show, closeHandler } = props;

    const orderID = useSelector((state: RootState) => state.order.currentOrder.id);
    const products = useSelector((state: RootState) => state.products.productsArr);
    const productsById = useMemo(() => getIDKeysArray(products), [products]);
    const [searchInp, setsearchInp] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [priceInp, setPriceInp] = useState(new Array());
    const [quantityInp, setQuantityInp] = useState(new Array());
    const [selectedProdIds, setSelectedProdIds] = useState(new Array());
    const [reviewMode, setReviewMode] = useState(false);

    useEffect(() => {
        if (quantityInp.length > 2) {
            const selectedProdIdsPre = quantityInp.filter((elm) => {
                if (elm !== undefined) {
                    return elm.value !== "";
                }
                return false;
            });
            setSelectedProdIds(selectedProdIdsPre);
        }
    }, [quantityInp])

    useEffect(() => {
        if (products.length > 0) {
            const priceInpPre = getIDKeysArray(products.map((elm: any) => {
                return {
                    "id": elm.id,
                    "value": "$22"
                }
            }));
            setPriceInp(priceInpPre);
            const quantityInpPre = getIDKeysArray(products.map((elm: any) => {
                return {
                    "id": elm.id,
                    "value": ""
                }
            }));
            setQuantityInp(quantityInpPre);
        }
    }, [products]);

    useEffect(() => {
        if (products.length > 0) {
            const searchResultsPre = products.filter((elm: any) => {
                return searchInp !== ""
                    ? searchFilterCheck(searchInp, elm.name)
                    : false;
            });
            setSearchResults(searchResultsPre);
        }
    }, [orderID, products, searchInp]);

    return (
        <PopupCommon size={70} show={show} closeHandler={closeHandler}>
            <PopTop>
                <PopTopTitle>Add product from Sysco's catalog</PopTopTitle>
                <PopClose>
                    <PopCloseIcon onClick={() => closeHandler(false)} size={26} />
                </PopClose>
            </PopTop>
            <PopLine>
                <PopLineIn />
            </PopLine>
            <PopMiddleAdd>
                <PopSearchTitle>Search products from Sysco's catalog and add quantity</PopSearchTitle>
                <PopSearchBlock>
                    <SearchInput
                        value={!reviewMode ? searchInp : ""}
                        onInput={(e) => !reviewMode ? setsearchInp(e.currentTarget.value) : void (0)}
                        size={50}
                        placeholder={!reviewMode ? "Search..." : "No search in review mode"}
                    />
                </PopSearchBlock>
                {(searchResults.length === 0)
                    ?
                    <PopSearchEmpty>
                        <PopSearchEmptyIcon size={155} />
                    </PopSearchEmpty>
                    :
                    <PopSearchResults>
                        <BodyTable>
                            <OrderTableTh>
                                <OrderColumnTh><OCThInside corner="left">&nbsp;</OCThInside></OrderColumnTh>
                                <OrderColumnTh><OCThInside corner="">Product name</OCThInside></OrderColumnTh>
                                <OrderColumnTh><OCThInside corner="">Brand</OCThInside></OrderColumnTh>
                                <OrderColumnTh><OCThInside corner="">Packing</OCThInside></OrderColumnTh>
                                <OrderColumnTh><OCThInside corner="">Price</OCThInside></OrderColumnTh>
                                <OrderColumnTh><OCThInside corner="right">Qt.</OCThInside></OrderColumnTh>
                            </OrderTableTh>
                            {searchResults.length > 0 &&
                                productsById.length > 0 &&
                                (!reviewMode
                                    ? searchResults
                                    : selectedProdIds.map((elm) => {
                                        return productsById[elm.id];
                                    })).map((elm: any, i: number) => {
                                        return (
                                            <OrderTableItem>
                                                <OrderColumn>
                                                    <OCInside side="left" corner={i === searchResults.length - 1 ? "left" : ""}>
                                                        <OrdImage src={`/assets/images/${elm.image}`} />
                                                    </OCInside>
                                                </OrderColumn>
                                                <OrderColumn><OCInside side="" corner="">{elm.name}</OCInside></OrderColumn>
                                                <OrderColumn><OCInside side="" corner="">{elm.brand}</OCInside></OrderColumn>
                                                <OrderColumn><OCInside side="" corner="">Default</OCInside></OrderColumn>
                                                <OrderColumn>
                                                    <OCInside side="" corner="">
                                                        <PopInput size={75} value={priceInp[elm.id].value} onInput={(e) => {
                                                            inputPriceAddPopup(e.currentTarget.value, priceInp, elm.id, setPriceInp);
                                                        }} />
                                                    </OCInside>
                                                </OrderColumn>
                                                <OrderColumn>
                                                    <OCInside side="right" corner={i === searchResults.length - 1 ? "right" : ""}>
                                                        <PopInput size={75} value={quantityInp[elm.id].value} onInput={(e) => {
                                                            inputQuantityAddPopup(e.currentTarget.value, quantityInp, elm.id, setQuantityInp);
                                                        }} />
                                                    </OCInside>
                                                </OrderColumn>
                                            </OrderTableItem>
                                        );
                                    })}
                        </BodyTable>
                    </PopSearchResults>
                }
            </PopMiddleAdd>
            <PopBottomAdd>
                <PopBottomCount>
                    {selectedProdIds.length > 0 && <><Bold>Total</Bold> {selectedProdIds.length} product{selectedProdIds.length > 1 && "s"}</>}
                </PopBottomCount>
                <PopBottomButtons>
                    <GreyButton onClick={() => {
                        if (selectedProdIds.length > 0 || reviewMode) {
                            setReviewMode(!reviewMode);
                        }
                    }} changed={reviewMode} active={selectedProdIds.length > 0}>{reviewMode ? "Back" : "Review"}</GreyButton>
                    {reviewMode && <><ButtonDivider />
                        <GreenButton>Add</GreenButton></>}
                </PopBottomButtons>
            </PopBottomAdd>
        </PopupCommon>
    );
}