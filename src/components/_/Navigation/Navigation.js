// Modules
import React from "react";
import { Link, withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// Others
import Auth from "../../../helpers/auth";


const unAuthOptions = (
	<Nav pullRight>
		<LinkContainer to="/login">
	    <NavItem >Login</NavItem>
	  </LinkContainer>
	  <LinkContainer to="/register">
	    <NavItem>Register</NavItem>
	  </LinkContainer>
	</Nav>
)

const AuthOptions = (
	<Nav pullRight>
		<LinkContainer to="/">
			<NavItem >Home</NavItem>
		</LinkContainer>
		<LinkContainer to="/dashboard">
			<NavItem >Dashboard</NavItem>
		</LinkContainer>
		<LinkContainer to="/logout">
			<NavItem >Logout</NavItem>
		</LinkContainer>
	</Nav>
)


class Navigation extends React.Component {
	constructor() {
		super();
		this.state = { 'user': null }
	}

	componentWillMount() {
		Auth.getAuth((user) => {
			this.setState({'user': user});
		});
	}

	render() {
		var navOptions = (this.state.user) ? AuthOptions : unAuthOptions;

		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Quiz Mate</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					{navOptions}
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default withRouter(Navigation);