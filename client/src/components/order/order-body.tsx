import { WhiteButton } from "../styled/common";
import { BodyBlock, BodyInnerBlock, BodyTop, SearchBlock, SearchInput, AdditionalBlock, AddItem, PrintOrder, PrintOrderIcon, BodyMain, BodyTable, OrderTableTh, OrderColumnTh, OrderTableItem, OrderColumn, OrdImage, OCThInside, OCInside } from "../styled/order-body";

export default function OrderBody() {

    return (
        <BodyBlock>
            <BodyInnerBlock>
                <BodyTop>
                    <SearchBlock>
                        <SearchInput placeholder="Search..." />
                    </SearchBlock>
                    <AdditionalBlock>
                        <AddItem>
                            <WhiteButton>Add item</WhiteButton>
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
                        {[1,2,3,4,5,6].map((elm, i) => {
                            return (
                                <OrderTableItem>
                                    <OrderColumn>
                                        <OCInside side="left" corner={i === 5 ? "left" : ""}>
                                            <OrdImage />IMG
                                        </OCInside>
                                    </OrderColumn>
                                    <OrderColumn><OCInside side="" corner="">Text sample must be here, because we have a text here</OCInside></OrderColumn>
                                    <OrderColumn><OCInside side="" corner="">Text sample must be here...</OCInside></OrderColumn>
                                    <OrderColumn><OCInside side="" corner="">Text sample must be here, because we have a text here</OCInside></OrderColumn>
                                    <OrderColumn><OCInside side="" corner="">Text sample must be here...</OCInside></OrderColumn>
                                    <OrderColumn><OCInside side="" corner="">Text sample must be here, because we have a text here</OCInside></OrderColumn>
                                    <OrderColumn><OCInside side="right" corner={i === 5 ? "right" : ""}>Text sample must be here, because we have a text here</OCInside></OrderColumn>
                                </OrderTableItem>
                            );
                        })}
                    </BodyTable>
                </BodyMain>
            </BodyInnerBlock>
        </BodyBlock>
    );
}