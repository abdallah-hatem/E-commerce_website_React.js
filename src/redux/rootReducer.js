import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, cartHandleReducer } from './shopping/productReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cartHandle: cartHandleReducer,
    
})

export default reducers