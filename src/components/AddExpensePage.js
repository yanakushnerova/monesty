import React from 'react'
import { connect } from 'react-redux'
import ExpenseCreationForm from './ExpenseCreationForm'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
	<div>
		AddExpensePage
		<ExpenseCreationForm 
			onSubmit={(expense) => {
				props.dispatch(addExpense(expense))
				props.history.push('/')
			}}
		/>
	</div>
	
)

export default connect()(AddExpensePage)
