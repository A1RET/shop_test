import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        getCartItemsFormCookie: (state) => {
            const cartItemsCookie = Cookies.get('cart_items');

            if (cartItemsCookie) {
                const cartItems = JSON.parse(cartItemsCookie);
                state.items = cartItems;
            }
        },
        setCartItemsToCookie: (state) => {
            const itemsJSON = JSON.stringify(state.items);
            Cookies.set('cart_items', itemsJSON, { expires: 1 });
        },
        addToCart: (state, action) => {
            state.items.push(action.payload);

            cartSlice.caseReducers.setCartItemsToCookie(state);
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            cartSlice.caseReducers.setCartItemsToCookie(state);
        }
    }
})

const {actions, reducer} = cartSlice;

export default reducer;
export const {
    addToCart,
    deleteItem,
    getCartItemsFormCookie
} = actions;