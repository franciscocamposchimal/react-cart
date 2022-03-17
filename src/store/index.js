import { combineReducers, createStore } from 'redux';
import productsData from '../data/products'
import productsReducer from '../ducks/products'
import cartReducer from '../ducks/cart';
import userReducer from '../ducks/users';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    users: userReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData // initial store values
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

export default store