import { Body, GreenButton, Page, WhiteButton } from "../styled/common";
import { OrderButtons, OrderNumber, SubNav, SubNavBottom, SubNavTop } from "../styled/sub-nav";

export default function Basket() {

    return (
        <Page>
            <SubNav>
                <SubNavTop>
                    Orders &gt; Order 32457ABC
                </SubNavTop>
                <SubNavBottom>
                    <OrderNumber></OrderNumber>
                    <OrderButtons>
                        <WhiteButton>Back</WhiteButton>
                        <GreenButton>Approve Order</GreenButton>
                    </OrderButtons>
                </SubNavBottom>
            </SubNav>
            <Body>

            </Body>
        </Page>
    )
}