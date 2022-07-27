import {combineReducers} from 'redux'
import CartReducer from './Reducers/CartReducer'
import ProductListReducer from './Reducers/ProductListReducer'
import userReducer from './Reducers/UserReducer'

const CombineReducers = combineReducers({CartReducer: CartReducer, user:userReducer,products:ProductListReducer})

export default CombineReducers