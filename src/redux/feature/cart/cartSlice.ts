import { IProduct } from "@/types/globalTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICart {
    products: IProduct[],
    total: number
}
const initialState: ICart = {
    products: [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingProd = state.products.find(prod => prod._id == action.payload._id)
            if (existingProd) {
                existingProd.quantity! += 1
            } else {
                state.products.push({ ...action.payload, quantity: 1 })
            }
            state.total += action.payload.price
        },
        removeOne: (state, action: PayloadAction<IProduct>) => {
            const existingProd = state.products.find(prod => prod._id == action.payload._id)
            existingProd!.quantity! -= 1
            if (existingProd!.quantity! == 0) {
                state.products = state.products.filter(prod => prod._id != action.payload._id)
            }
            state.total -= action.payload.price
        },
        removeFromCart: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter(prod => prod._id != action.payload._id)
            state.total -= (action.payload.price * action.payload.quantity!)  
        }
    }
})

export const { addToCart, removeOne, removeFromCart } = cartSlice.actions
export default cartSlice.reducer