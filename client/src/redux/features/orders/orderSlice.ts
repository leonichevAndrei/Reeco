import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIDKeysArray, getNormalArray } from "../../../utill/getIDKeysArray";

const initialState: any = {
    currentOrder: {},
    currentItemID: -1
}
const headers = { "Content-type": "application/json" };

export const fetchCurrentOrder = createAsyncThunk(
    "orders/fetchCurrentOrder",
    async (id: any) => {
        return fetch(`http://localhost:3001/orders/${id}`)
            .then(response => response.json());
    }
);

export const updateCurrentOrder = createAsyncThunk(
    "orders/updateCurrentOrder",
    async (data: any) => {
        const order = generateOrder(data);
        return fetch(`http://localhost:3001/orders/${order.id}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(order)
        }).then((response) => response.json());
    }
);

function generateOrder(data: any) {
    switch (data.type) {
        case "order/updateItem/setApproved":
        case "order/updateItem/setMissing":
        case "order/updateItem/setMissingUrgent":
        case "order/updateItem/setNone": {
            return getNewOrder(
                data,
                (price: any) => price,
                (quantity: any) => quantity,
                (status: any) => {
                    switch (data.type) {
                        case "order/updateItem/setApproved": {
                            return status !== "approved" ? "approved" : "none"
                        };
                        case "order/updateItem/setMissing": {
                            return status !== "missing" ? "missing" : "none"
                        };
                        case "order/updateItem/setMissingUrgent": {
                            return status !== "missing-urgent" ? "missing-urgent" : "none"
                        };
                        default: return "none";
                    }
                },
                (updated: any) => updated,
                (updReason: any) => updReason
            );
        };
        default: return data.order;
    }
}

function getNewOrder(data: any, priceCallback: any, quantityCallback: any, statusCallback: any, updatedCallback: any, updReasonCallback: any) {
    const orderItems = getIDKeysArray(data.order.items);
    let item = orderItems[data.itemID];
    orderItems[data.itemID] = {
        ...item,
        price: priceCallback(item.price),
        quantity: quantityCallback(item.quantity),
        status: statusCallback(item.status),
        updated: updatedCallback(item.updated),
        updReason: updReasonCallback(item.updReason)
    };
    const newOrder = { ...data.order, items: getNormalArray(orderItems) };
    return newOrder;
}

export const orderSlice = createSlice({
    name: "Order",
    initialState,
    reducers: {
        setItemID: (state, action) => {
            state.currentItemID = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentOrder.fulfilled, (state, action) => {
                state.currentOrder = action.payload;
            })
            .addCase(updateCurrentOrder.fulfilled, (state, action) => {
                state.currentOrder = action.payload;
            })
    }
});

export const { setItemID } = orderSlice.actions;
export default orderSlice.reducer;