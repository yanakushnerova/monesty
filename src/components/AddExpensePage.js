import React from 'react'
import { connect } from 'react-redux'
import ExpenseCreationForm from './ExpenseCreationForm'
import { addExpense } from '../actions/expenses'

export const AddExpensePage = (props) => (
	<div>
		AddExpensePage
		<ExpenseCreationForm 
			onSubmit={(expense) => {
				props.onSubmit(expense)
				props.history.push('/')
			}}
		/>
	</div>
)

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (expense) => {
		dispatch(addExpense(expense))
}})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
