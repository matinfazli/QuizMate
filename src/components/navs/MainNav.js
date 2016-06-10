import React from "react";
import { Link, withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class MainNav extends React.Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Quiz Mate</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<LinkContainer to="/login">
		          <NavItem >Login</NavItem>
		        </LinkContainer>
		        <LinkContainer to="/register">
		          <NavItem>Register</NavItem>
		        </LinkContainer>
		      </Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default withRouter(MainNav);