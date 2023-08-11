
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./feature/cart/cartSlice"
import productReducer from "./feature/products/productSlice"
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    } 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch