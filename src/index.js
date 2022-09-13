import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './routers/App';
import configureStore from './store/configureStore'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
document.getElementById('root'));
