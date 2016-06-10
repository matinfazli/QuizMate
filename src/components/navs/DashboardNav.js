import React from "react";
import { Link, withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class DashboardNav extends React.Component {
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
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default withRouter(DashboardNav);