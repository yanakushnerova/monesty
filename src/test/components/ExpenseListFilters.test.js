import React from "react"
import { shallow } from "enzyme"
import moment from "moment"
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, filters2 } from "../fixtures/filters"

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn(),
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('should render expense list filters', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render expense list filters with another data', () => {
    wrapper.setProps({ filters: filters2 })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'bill'
    wrapper.find('input').simulate('change', { target: { value } })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({ filters: filters2 })
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
    const startDate = moment(0).add(1, 'months')
    const endDate = moment(0).add(4, 'months')
    wrapper.find('.dateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate'
    wrapper.find('.dateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})
