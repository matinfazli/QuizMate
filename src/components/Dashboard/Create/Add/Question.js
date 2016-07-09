// Modules
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

class AddQuestion extends React.Component {
	componentWillMount() {
		var { title, toLink } = this.props;
		this.state = {
			'title': title,
			'toLink': toLink
		}
	}

	render() {
    return (
    	<li>
  			<Link to={this.state.toLink} class="btn btn-warning title">{this.state.title}</Link>
  			<button class="btn btn-danger act-delete">
  				<i class="fa fa-trash" aria-hidden="true"></i>
  			</button>
  		</li>
    )
	};
}

export default withRouter(AddQuestion);