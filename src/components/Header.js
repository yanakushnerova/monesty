import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => (
	<div>
		<h1>title</h1>
		<NavLink to='/' activeClassName="is-active">dashboard</NavLink>
		<NavLink to='/create' activeClassName="is-active">create expense</NavLink>
		<NavLink to='/edit' activeClassName="is-active">edit expense</NavLink>
		<NavLink to='/help' activeClassName="is-active">help</NavLink>
	</div>
)

export default Header
