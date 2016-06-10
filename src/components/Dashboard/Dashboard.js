import React from "react";
import Auth from "../../helpers/auth";
import { withRouter, browserHistory } from "react-router";

class Dashboard extends React.Component {
	componentWillMount() {
		Auth.getAuth((user) => {
			if (!user) browserHistory.push('/');
		});
	}

	render() {
		return (
			<div class="container">
				<h1>Dashboard</h1>
				<h4>Make some questions here</h4>
			</div>
		);
	};
}

export default withRouter(Dashboard);