import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './routers/App';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({ description: 'water bill', amount: 400 }))
store.dispatch(addExpense({ description: 'gas bill'}))
store.dispatch(addExpense({ description: 'rent', amount: 1300 }))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
document.getElementById('root'));
