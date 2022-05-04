import { BodyBlock, BodyInnerBlock, BodyTop, SearchBlock, SearchInput, AdditionalBlock, AddItem, AddItemButton, PrintOrder, PrintOrderIcon, BodyMain, BodyTable, OrderTableTh, OrderColumnTh, OrderTableItem, OrderColumn, OrdImage } from "../styled/order-body";

export default function OrderBody() {

    return (
        <BodyBlock>
            <BodyInnerBlock>
                <BodyTop>
                    <SearchBlock>
                        <SearchInput />
                    </SearchBlock>
                    <AdditionalBlock>
                        <AddItem>
                            <AddItemButton />
                        </AddItem>
                        <PrintOrder>
                            <PrintOrderIcon />
                        </PrintOrder>
                    </AdditionalBlock>
                </BodyTop>
                <BodyMain>
                    <BodyTable>
                        <OrderTableTh>
                            <OrderColumnTh></OrderColumnTh>
                            <OrderColumnTh></OrderColumnTh>
                            <OrderColumnTh></OrderColumnTh>
                            <OrderColumnTh></OrderColumnTh>
                            <OrderColumnTh></OrderColumnTh>
                            <OrderColumnTh></OrderColumnTh>
                        </OrderTableTh>
                        {[1,2,3,4,5,6].map((elm, i) => {
                            return (
                                <OrderTableItem>
                                    <OrderColumn>
                                        <OrdImage />
                                    </OrderColumn>
                                    <OrderColumn>Text sample must be here, because we have a text here</OrderColumn>
                                    <OrderColumn>Text sample must be here, because we have a text here</OrderColumn>
                                    <OrderColumn>Text sample must be here, because we have a text here</OrderColumn>
                                    <OrderColumn>Text sample must be here, because we have a text here</OrderColumn>
                                    <OrderColumn>Text sample must be here, because we have a text here</OrderColumn>
                                    <OrderColumn>Text sample must be here, because we have a text here</OrderColumn>
                                </OrderTableItem>
                            );
                        })}
                    </BodyTable>
                </BodyMain>
            </BodyInnerBlock>
        </BodyBlock>
    );
}