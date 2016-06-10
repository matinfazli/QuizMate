import React from "react";
import Auth from "../../helpers/auth";
import { withRouter, browserHistory } from "react-router";

class Quiz extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		Auth.getAuth((user) => {
			if (!user) browserHistory.push('/login');
		});
	}

	render() {
		return (
			<div class="container">
				<h1>quiz</h1>
			</div>
		);
	}

}

export default withRouter(Quiz);