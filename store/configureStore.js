import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from '../reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import weatherReducer from '../reducers/weatherReducer';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer,persistStore } from "redux-persist";

let middleWare = [reduxThunk];
const persistConfig = {
   key:'root',
   storage: AsyncStorage,
   whitelist:['weather'],
   blacklist:['login'],
};
const rootReducer = combineReducers(
    { login: loginReducer,
      weather:  weatherReducer 
    }
);
const persistedReducer = persistReducer(persistConfig,rootReducer);

export default()=>{
    let store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(...middleWare)));
    let persistor = persistStore(store);
    return{store,persistor}
}

// const configureStore = () => {
//     return createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleWare)));
// }

// export default configureStore;