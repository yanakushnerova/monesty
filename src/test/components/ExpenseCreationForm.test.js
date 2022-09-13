import React from "react"
import { shallow } from "enzyme"
import ExpenseCreationForm from "../../components/ExpenseCreationForm"
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseCreationForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense form with expense data', () => {
    const wrapper = shallow(<ExpenseCreationForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseCreationForm />)
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
    const value = 'description'
    const wrapper = shallow(<ExpenseCreationForm />)
    wrapper.find('input').at(0).simulate('change', { target: { value }})
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on input change', () => {
    const value = 'note'
    const wrapper = shallow(<ExpenseCreationForm />)
    wrapper.find('textarea').simulate('change', { target: { value }})
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
    const value = '12.30'
    const wrapper = shallow(<ExpenseCreationForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value }})
    expect(wrapper.state('amount')).toBe(value)
})

test('should set amount if invalid input', () => {
    const value = '12.301'
    const wrapper = shallow(<ExpenseCreationForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value }})
    expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseCreationForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    })
})

test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseCreationForm />)
    wrapper.find('#date').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseCreationForm />)
    wrapper.find('#date').prop('onFocusChange')({ focused })
    expect(wrapper.state('calendarFocused')).toEqual(focused)
})
