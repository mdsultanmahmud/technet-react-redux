import { IProduct } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

interface ICart{
    products: IProduct[]
}
const initialState: ICart = {
    products: []
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart: state =>{
            return state
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer