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
        case "order/updateItem/setApproved": {
            const orderItems = getIDKeysArray(data.order.items);
            orderItems[data.itemID] = {
                ...orderItems[data.itemID],
                status: orderItems[data.itemID].status !== "approved" ? "approved" : "none"
            };
            const newOrder = { ...data.order, items: getNormalArray(orderItems) };
            return newOrder;
        };
        default: return data.order;
    }
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