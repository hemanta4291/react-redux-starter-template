import {combineReducers} from 'redux'
import AuthReducer from './Authreducer'
import ContactReducer from './Contactreducer'


const RootReducer = combineReducers({
    auth:AuthReducer,
    contact:ContactReducer
})

export default RootReducer