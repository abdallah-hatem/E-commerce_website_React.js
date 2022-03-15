import { actionTypes } from './shoppingTypes'



export function setProducts(products) {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export function selectedProduct(product) {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export function addToCart(product) {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
}


export function removeFromCart(product) {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: product
    }
}

export function clearCart() {
    return {
        type: actionTypes.CLEAR_CART,
    }
}





