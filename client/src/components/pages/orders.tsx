import { Page, UnderConst, ListItem, ListTitle } from "../styled/common";

export default function Orders() {

    return (
        <Page>
            <UnderConst>
                <ListTitle>Orders List:</ListTitle>
                <ListItem to="/orders/1">To order #1</ListItem>
            </UnderConst>
        </Page>
    );
}