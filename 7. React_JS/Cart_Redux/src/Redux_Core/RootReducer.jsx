import cartReducer from "./cartRedux/cartReducer";
import productReducer from "./productRedux/productReducer";
// import wishlistReducer from "./wishlistRedux/wishlistRedux";
import {combineReducers} from 'redux'


const rootReducer  = combineReducers({
    cart:cartReducer,
    product:productReducer,
    // wishlist:wishlistReducer
})

export default rootReducer