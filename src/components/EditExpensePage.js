import React from 'react'
import { connect } from 'react-redux'
import ExpenseCreationForm from './ExpenseCreationForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
	return (
		<div>
			<ExpenseCreationForm expense={props.expense} onSubmit={(expense) => {
				props.dispatch(editExpense(props.expense.id, expense))
				props.history.push('/')
			}} />

			<button onClick={() => {
				props.dispatch(removeExpense({ id: props.expense.id }))
				props.history.push('/')
			}}>remove</button>
		</div>
	)
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => {
			return expense.id === props.match.params.id
		})
	}
}

export default connect(mapStateToProps)(EditExpensePage)
