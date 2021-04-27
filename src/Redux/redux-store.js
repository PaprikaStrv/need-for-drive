import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import orderPageReducer from './orderPage-reducer';
import locationReducer from './location-reducer';



let reducers = combineReducers({
    orderPage: orderPageReducer,
    location: locationReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;