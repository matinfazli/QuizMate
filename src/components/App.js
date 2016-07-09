// Styles
import "../assets/stylesheets/style.scss";

// Modules
import React from "react";
import { withRouter, browserHistory } from "react-router";

// Others
import Navigation from "./_/Navigation/Navigation";

class App extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				{this.props.children}
			</div>
		);
	}
}

export default withRouter(App);