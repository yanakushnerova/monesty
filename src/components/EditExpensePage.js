import React from 'react'

const EditExpensePage = (props) => {
	console.log(props)
	return (
	<div>EditExpensePage with id {props.match.params.id}</div>
	)
}

export default EditExpensePage
