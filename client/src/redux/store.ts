import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./features/test/testSlice";
import ordersReducer from "./features/orders/ordersSlice";

export const store = configureStore({
    reducer: {
        orders: ordersReducer,
        test: testReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;