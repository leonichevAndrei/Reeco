import { DefaultInput, WhiteButton } from "../styled/common";
import { BodyBlock, BodyInnerBlock, BodyTop, SearchBlock, AdditionalBlock, AddItem, PrintOrder, PrintOrderIcon, BodyMain, BodyTable, OrderTableTh, OrderColumnTh, OrderTableItem, OrderColumn, OrdImage, OCThInside, OCInside, Status, StatusEdit, StatusEditLink, StatusMess, StatusOK, StatusOKIcon, StatusX, StatusXIcon, StatusBlock } from "../styled/order-body";

type OrderBodyProps = {
    editPopupHandler: React.Dispatch<React.SetStateAction<boolean>>,
    dialPopupHandler: React.Dispatch<React.SetStateAction<boolean>>
}

export default function OrderBody(props: OrderBodyProps) {

    const { editPopupHandler, dialPopupHandler } = props;

    return (
        <BodyBlock>
            <BodyInnerBlock>
                <BodyTop>
                    <SearchBlock>
                        <DefaultInput placeholder="Search..." />
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
                                    <OrderColumn><OCInside side="" corner="">$60.67 / 6 * 1LB</OCInside></OrderColumn>
                                    <OrderColumn><OCInside side="" corner="">15 x 6 * 1LB</OCInside></OrderColumn>
                                    <OrderColumn><OCInside side="" corner="">$9000.88</OCInside></OrderColumn>
                                    <OrderColumn>
                                        <OCInside style={{ minWidth: "250px" }} side="right" corner={i === 5 ? "right" : ""}>
                                            <StatusBlock>
                                                <Status>
                                                    <StatusMess type="missing-urgent">Missing - Urgent</StatusMess>
                                                </Status>
                                                <StatusOK>
                                                    <StatusOKIcon size={24} />
                                                </StatusOK>
                                                <StatusX onClick={() => dialPopupHandler(true)}>
                                                    <StatusXIcon size={30} />
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