import React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
