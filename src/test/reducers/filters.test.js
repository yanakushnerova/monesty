import filtersReducer from "../../reducers/filters"
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should setup sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should setup sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('should setup text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    }

    const state = filtersReducer(undefined, action)
    expect(state.text).toEqual('bill')
})

test('should setup set start date', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    }

    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(moment(0))
})

test('should setup set end date', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    }

    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(moment(0))
})
