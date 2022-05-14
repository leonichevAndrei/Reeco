import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    value: 0,
}

export const delayedIncrement: any = createAsyncThunk(
    "test/delayedIncrement",
    async (value: number, thunkApi) => {
        const response = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value);
            }, 1000);
        })
        return response;
    }
);

export const delayedMultiply: any = createAsyncThunk(
    "test/delayedMultiply",
    async (value: number, thunkApi) => {
        const response = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value);
            }, 1000);
        })
        return response;
    }
);

export const testSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(delayedIncrement.fulfilled, (state, action) => {
            state.value += action.payload;
        })
        .addCase(delayedMultiply.fulfilled, (state, action) => {
            state.value *= action.payload;
        })
    }
})

export const { increment, decrement, incrementByAmount } = testSlice.actions;
export default testSlice.reducer;