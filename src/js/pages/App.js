import React from "react";
import Auth from "../auth";
import { withRouter, browserHistory } from "react-router";
import MainNav from "../components/navs/MainNav";
import DashboardNav from "../components/navs/DashboardNav";

var navOptions;

class App extends React.Component {
	constructor() {
		super();
		this.state = { 'user': null }
		this.navOptions = this.navOptions.bind(this);
	}

	componentWillMount() {
		Auth.getAuth((user) => {
			this.setState({'user': user});
		});
	}

	navOptions() {
		return (this.state.user) ? <DashboardNav /> : <MainNav />;
	}

	render() {
		return (
			<div>
				{this.navOptions()}
				{this.props.children}
			</div>
		);
	}

}

export default withRouter(App);