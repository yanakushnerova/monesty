import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './routers/App';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

// store.dispatch(addExpense({ description: 'water bill' }))
// store.dispatch(addExpense({ description: 'gas bill'}))

// store.dispatch(setTextFilter('bill'))
// store.dispatch(setTextFilter('water'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
document.getElementById('root'));
