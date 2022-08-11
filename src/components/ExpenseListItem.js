import React from 'react'
import { useHistory } from 'react-router-dom'

const ExpenseListItem = ({id, description, amount, createdAt}) => {
    const history = useHistory()
    
    return (
            <div>
                <p>{description}</p>
                <p>{amount} - {createdAt}</p>
                <button onClick={() => {
                     history.push(`/edit/${id}`)
                }}>edit expense</button>
            </div>
    )
}

export default ExpenseListItem
