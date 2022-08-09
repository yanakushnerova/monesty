import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom"

import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import HelpPage from '../components/HelpPage'

import Header from '../components/Header'

const App = () => (
	<Router>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		</div>
    </Router>
)

export default App
