//StyleSheet
import '../assets/stylesheets/style.css';

//React
import React from "react";
import { withRouter, browserHistory } from "react-router";

//Helper
import Auth from "../helpers/auth";

//Components
import MainNav from "./navs/MainNav";
import DashboardNav from "./navs/DashboardNav";


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
		console.log('im hot');
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