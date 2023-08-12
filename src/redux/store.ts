import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./feature/cart/cartSlice"
import productReducer from "./feature/products/productSlice"
import { productApi } from "./api/apiSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch