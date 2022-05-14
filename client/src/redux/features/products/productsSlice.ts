import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    productsArr: []
}
const headers = { "Content-type": "application/json" };

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (value: void) => {
        return fetch("http://localhost:3001/products")
            .then(response => response.json());
    }
);

export const productsSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsArr = action.payload;
            })
    }
})

export const {} = productsSlice.actions;
export default productsSlice.reducer;