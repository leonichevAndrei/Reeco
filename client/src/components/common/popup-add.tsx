import React, { useState } from "react";
import { SearchInput, GreyButton } from "../styled/common";
import { BodyTable, OrderTableTh, OrderColumnTh, OCThInside, OrderTableItem, OrderColumn, OCInside, OrdImage, StatusBlock, Status, StatusMess, StatusOK, StatusOKIcon, StatusX, StatusXIcon, StatusEdit, StatusEditLink } from "../styled/order-body";
import { PopTop, PopClose, PopCloseIcon, PopBottom, PopTopTitle, PopLine, PopLineIn, PopMiddleAdd, PopSearchBlock, PopSearchTitle, PopSearchEmpty, PopSearchEmptyIcon, PopSearchResults, PopInput } from "../styled/popup";
import PopupCommon from "./popup-common";

type PopupEditProps = {
    show: boolean,
    closeHandler: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PopupAdd(props: PopupEditProps) {

    const { show, closeHandler } = props;

    const [searchValue, setSearchValue] = useState("");

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
                    <SearchInput value={searchValue} onInput={(e) => setSearchValue(e.currentTarget.value)} size={50} placeholder="Search..." />
                </PopSearchBlock>
                {(searchValue.length === 0)
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
                            {[1, 2, 3, 4, 5, 6].map((elm, i) => {
                                return (
                                    <OrderTableItem>
                                        <OrderColumn>
                                            <OCInside side="left" corner={i === 5 ? "left" : ""}>
                                                <OrdImage src="/assets/images/avocado.jpg" />
                                            </OCInside>
                                        </OrderColumn>
                                        <OrderColumn><OCInside side="" corner="">Chicken Breast Fillets, Boneless Marinated 6 Ounce Raw, Invivid</OCInside></OrderColumn>
                                        <OrderColumn><OCInside side="" corner="">Hormel Black Labelmany</OCInside></OrderColumn>
                                        <OrderColumn><OCInside side="" corner="">10/32 OZ</OCInside></OrderColumn>
                                        <OrderColumn>
                                            <OCInside side="" corner="">
                                                <PopInput size={75} />
                                            </OCInside>
                                        </OrderColumn>
                                        <OrderColumn>
                                            <OCInside side="right" corner={i === 5 ? "right" : ""}>
                                                <PopInput size={75} value="4" />
                                            </OCInside>
                                        </OrderColumn>
                                    </OrderTableItem>
                                );
                            })}
                        </BodyTable>
                    </PopSearchResults>
                }
            </PopMiddleAdd>
            <PopBottom>
                <GreyButton active={false}>Review</GreyButton>
            </PopBottom>
        </PopupCommon>
    );
}