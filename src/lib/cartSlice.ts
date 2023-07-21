import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IData } from '@/data/Data'

interface CartItem {
   product:IData,
   quantity:number
}
export interface CartState {
    item: CartItem[],
    TotalQuantity: number,
    itemprice: number
    TotalPrice: number

}

const initialState: CartState = {
    item: [],
    itemprice: 0,
    TotalQuantity: 0,
    TotalPrice: 0

}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<{ product: IData, price: number, quantity: number }>) => {
            const newitem = action.payload
            const existingItem = state.item.find((item) => item.product.id === newitem.product.id)
            

            state.TotalQuantity = state.TotalQuantity + action.payload.quantity
            state.TotalPrice = state.TotalPrice + (state.itemprice * action.payload.quantity)
            if (existingItem) {
                existingItem.quantity=existingItem.quantity+newitem.quantity
            } else {
                state.item.push({ ...newitem, quantity: action.payload.quantity })
            }
        }

    },
})

// Action creators are generated for each case reducer function
export const { addToCart} = counterSlice.actions

export default counterSlice.reducer