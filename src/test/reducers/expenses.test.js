import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should setup default expense values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'water',
            note: '',
            amount: 20,
            createdAt: 0
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ ...expenses,  {
        id: '4',
        description: 'water',
        note: '',
        amount: 20,
        createdAt: 0
    }])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[2].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[1] ])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '439834'
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            amount: 2450
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state[2].amount).toBe(2450)
})

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '67',
        updates: {
            amount: 2450
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
