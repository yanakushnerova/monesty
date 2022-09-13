import React from "react"
import moment from "moment"
import { SingleDatePicker } from "react-dates"
import 'react-dates/initialize'

export default class ExpenseCreationForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value

        if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || ! this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.onSubmit}>
                    <input 
                        type='text'
                        placeholder='description' 
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus 
                    />
                    <input
                        type='text'
                        placeholder='amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder='Add a note (optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    
                    { this.props.expense ? <button>edit expense</button> : <button>add expense</button> }
                </form>
            </div>
        )
    }
}
