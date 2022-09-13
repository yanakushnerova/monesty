import React from "react"
import { connect } from "react-redux"
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../actions/filters"
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate()
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount()
        }
    }

    render () {
        return (
            <div>
                <input type='text' defaultValue={this.props.filters.text} onChange={this.onTextChange}></input>

                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value='date'>date</option>
                    <option value='amount'>amount</option>
                </select>

                <DateRangePicker
                    className="dateRangePicker"
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    startDateId="start"
                    endDateId="end"
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (date) => dispatch(setStartDate(date)),
    setEndDate: (date) => dispatch(setEndDate(date)),
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
