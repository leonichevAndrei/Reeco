import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./features/test/testSlice";
import ordersReducer from "./features/orders/orders-slice";
import orderReducer from "./features/orders/order-slice";
import productsReducer from "./features/products/products-slice";

export const store = configureStore({
    reducer: {
        orders: ordersReducer,
        order: orderReducer,
        products: productsReducer,
        test: testReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;