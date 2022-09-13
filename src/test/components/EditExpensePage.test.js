import React from "react"
import { shallow } from "enzyme"
import { EditExpensePage } from "../../components/EditExpensePage"
import expenses from '../fixtures/expenses'

let onSubmit, onRemove, history, wrapper

beforeEach(() => {
    onSubmit = jest.fn()
    onRemove = jest.fn()
    history  = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage onSubmit={onSubmit} onRemove={onRemove} history={history} expense={expenses[2]} />)
})

test('should render edit expense page', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle edit expense', () => {
    wrapper.find('ExpenseCreationForm').prop('onSubmit')(expenses[2])
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click')
    expect(onRemove).toHaveBeenLastCalledWith({ id: expenses[2].id })
    expect(history.push).toHaveBeenLastCalledWith('/')
})
