/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
//import  configureStore  from './store/configureStore';
import reduxStore from './src/store/configureStore'
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'

//const store = configureStore()
const {store,persistor} = reduxStore();
const RNRedux = () => (
    <Provider store = { store }>
        <PersistGate loading= {null} persistor={persistor}>
        <App/>
        </PersistGate>   
    </Provider>
)


AppRegistry.registerComponent(appName, () => RNRedux);
// export default connect(mapStateToProps, mapDispatchToProps);
