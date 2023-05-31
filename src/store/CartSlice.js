import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    item: [],
    deliveryCharges: 20,

}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newProduct = action.payload.product
            const cartItem = state.item.find((item) => item.product.id == newProduct.id)
            if (cartItem) {
                cartItem.quantity += 1
            } else {
                state.item.push({
                    product: newProduct,
                    quantity: 1,
                })
            }
            alert('Added to Cart');
        },
        changeQuantity: (state, action) => {

        }
    }
})