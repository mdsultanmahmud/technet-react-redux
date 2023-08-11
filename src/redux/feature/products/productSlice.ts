import { createSlice, PayloadAction} from "@reduxjs/toolkit"

interface IProductFilter{
    status: boolean,
    priceRange: number
}

const initialState: IProductFilter ={
    status: true,
    priceRange: 150
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        toggleStatus: (state) =>{
            state.status = !state.status
        },
        setPriceRange: (state, action: PayloadAction<number>) =>{
            state.priceRange = action.payload
        }
    }
})

export const {toggleStatus ,setPriceRange } = productSlice.actions

export default productSlice.reducer 