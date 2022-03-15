import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { store, persistedStore } from './redux/store'

import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
  <PersistGate loading={null} persistor={persistedStore}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </PersistGate>,
  document.getElementById('root')
);


