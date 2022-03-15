// import { store } from "../store";
import { actionTypes } from "./shoppingTypes"


export function productReducer(state = { products: [] }, { type, payload }) {

    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload }

        default:
            return state;
    }
}

export function selectedProductReducer(state = {}, { type, payload }) {

    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }

        default:
            return state;
    }
}


const initialState = {
    cart: [],
    totalPrice: 0,
    count: 0,

};

export function cartHandleReducer(state = initialState, { type, payload }) {

    switch (type) {

        ////////////////// Add To Cart ////////////////////////

        case actionTypes.ADD_TO_CART:


            const duplicates = state.cart ? state.cart.filter(prod => prod.id === payload.id) : []
            const prices = state.cart.map(prod => prod.price)
            let total = prices.reduce((a, b) => a + b, 0)
            let finalTotal = total



            return {

                ...state,
                cart: duplicates.length > 0 ? [...state.cart] : [...state.cart, payload],
                totalPrice: finalTotal,
                count: state.cart.length
            }

        ////////////////// Remove From Cart ////////////////////////

        case actionTypes.REMOVE_FROM_CART:

            const updatedCart = state.cart.length > 0 ? state.cart.filter(prod => !(prod.id === payload.id)) : []

            const updatedPrices = updatedCart.map(prod => prod.price)

            let updatedTotal = updatedPrices.reduce((a, b) => a + b, 0)
            let updatedfinalTotal = updatedTotal

            // let numm = state.cart.length


            return {
                ...state,
                cart: updatedCart,
                totalPrice: updatedfinalTotal,
                count: state.cart.length
            }


        ////////////////// Clear Cart ////////////////////////
        case actionTypes.CLEAR_CART:
            return {
                cart: [],
                totalPrice: 0,
                count: 0,
            }


        default:
            return state;
    }
}



