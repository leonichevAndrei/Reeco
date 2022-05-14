import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    currentOrder: {}
}
const headers = { "Content-type": "application/json" };

export const fetchCurrentOrder = createAsyncThunk(
    "orders/fetchCurrentOrder",
    async (id: any) => {
        return fetch(`http://localhost:3001/orders/${id}`)
            .then(response => response.json());
    }
);

export const orderSlice = createSlice({
    name: "Order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentOrder.fulfilled, (state, action) => {
                state.currentOrder = action.payload;
            })
    }
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;