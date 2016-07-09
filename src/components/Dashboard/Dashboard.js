import React from "react";
import Auth from "../../helpers/auth";
import { Link, withRouter, browserHistory } from "react-router";
import { Table, Panel } from "react-bootstrap";

class Dashboard extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		Auth.getAuth((user) => {
			if (!user) browserHistory.push('/');
		});
	}

	render() {
    return (
    	<div class="dashboard">
	    	<div class="container">
	    		<div class="row">
	    			<div class="col-xs-12">
	    				<Link to="/dashboard/create" class="btn btn-success btn-block">Create a new quiz!</Link>
	    			</div>
	    		</div>
	    	</div>
    	</div>
    );
	};
}

export default withRouter(Dashboard);