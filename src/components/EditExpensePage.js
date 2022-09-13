import React from 'react'
import { connect } from 'react-redux'
import ExpenseCreationForm from './ExpenseCreationForm'
import { editExpense, removeExpense } from '../actions/expenses'

export const EditExpensePage = (props) => {
	const onSubmit = (expense) => {
		props.onSubmit(props.expense.id, expense)
		props.history.push('/')
	}

	const onRemove = () => {
		props.onRemove({ id: props.expense.id })
		props.history.push('/')
	}

	return (
		<div>
			<ExpenseCreationForm expense={props.expense} onSubmit={onSubmit} />
			<button onClick={onRemove}>remove</button>
		</div>
	)
}

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find((expense) => {
		return expense.id === props.match.params.id
	})
})

const mapDispatchToProps = (dispatch, props) => ({
	onSubmit: (id, expense) => dispatch(editExpense(id, expense)),
	onRemove : (data) => dispatch(removeExpense(data)),
	dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
