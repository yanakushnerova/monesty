import React from "react"
import ExpenseListItem from "../../components/ExpenseListItem"
import { shallow } from "enzyme"
import expenses from "../fixtures/expenses"

test('should render expense item', () => {
    const expense = {...expenses[1]}
    const wrapper = shallow(<ExpenseListItem expense={expense}/>)
    expect(wrapper).toMatchSnapshot()
})
