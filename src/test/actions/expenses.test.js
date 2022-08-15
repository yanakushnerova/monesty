import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test('should setup add expense action with default values', () => {
    const action = addExpense()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action with provided values', () => {
    const expenseData = {
        description: 'rent',
        note: 'this month rent',
        amount: 300,
        createdAt: 2000,
        id: '123qwerty'
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup remove expense action', () => {
    const action = removeExpense({ id: '123qwerty' })

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123qwerty'
    })
})

test('should setup edit expense action', () => {
    const action = editExpense('123qwerty', { amount: 300 })

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123qwerty',
        updates: {
            amount: 300
        }
    })
})
