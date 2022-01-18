import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.scss';
import App from './App';
import { Provider } from 'react-redux';
import rootStor from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStor.store}>
      <PersistGate loading={null} persistor={rootStor.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
