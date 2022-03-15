import { applyMiddleware, combineReducers, createStore, getState } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";



const persistConfig = {
    key: 'root',
    storage,
}


// const store = createStore(rootReducer, composeWithDevTools())

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistedStore = persistStore(store)




