import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../../actions/filters";
import moment from 'moment'

test('should setup set start date action', () => {
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should setup set end date action', () => {
    const action = setEndDate(moment(0))

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should setup set text filter action with provided value', () => {
    const action = setTextFilter('grocery')

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'grocery'
    })
})

test('should setup set text filter action with default value', () => {
    const action = setTextFilter()

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should setup sort by amount action', () => {
    const action = sortByAmount()

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should setup sort by date action', () => {
    const action = sortByDate()

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})
