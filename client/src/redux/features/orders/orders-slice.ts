import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    orderIDs: []
}
const headers = { "Content-type": "application/json" };

export const fetchOrdersIDs = createAsyncThunk(
    "orders/fetchOrdersIDs",
    async (value: void) => {
        return fetch("http://localhost:3001/orders")
            .then(response => response.json())
            .then(result => result.map((elm: any, i: number) => elm.id));
    }
);

export const addOrder = createAsyncThunk(
    "orders/addOrder",
    async (data: any) => {
        return fetch("http://localhost:3001/orders", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        }).then((response) => response.json());
    }
);

export const removeOrder = createAsyncThunk(
    "orders/removeOrder",
    async (id: number) => {
        return fetch(`http://localhost:3001/orders/${id}`, {
            method: "DELETE",
            headers: headers
        }).then(() => {
            return id;
        })
    }
);

export const ordersSlice = createSlice({
    name: "Orders",
    initialState,
    reducers: {
        getOrdersIDs: (state) => {
            state.orderIDs = [111, 112, 113];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrdersIDs.fulfilled, (state, action) => {
                state.orderIDs = action.payload;
            })
            .addCase(addOrder.fulfilled, (state, action) => {
                state.orderIDs.push(action.payload.id);
            })
            .addCase(removeOrder.fulfilled, (state, action) => {
                state.orderIDs.splice(state.orderIDs.indexOf(action.payload), 1);
            })
    }
})

export const { getOrdersIDs } = ordersSlice.actions;
export default ordersSlice.reducer;