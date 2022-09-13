import moment from 'moment'

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filters2 = {
    text: 'rent',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(10, 'days')
}

export { filters, filters2 }
