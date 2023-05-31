import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
    products: products,
    selectedProduct: null,

}

export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelected: (state, action) => {
            const productId = action.payload 
            state.selectedProduct = state.products.find(p=>p.id == productId)
        },
    }
})