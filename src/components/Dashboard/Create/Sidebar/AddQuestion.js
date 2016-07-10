// Modules
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

class AddQuestion extends React.Component {
	render() {
		var { index, title, toLink, remove} = this.props;

    return (
    	<li>
  			<Link to={toLink} class="btn btn-warning title">{title}</Link>
  			<button id={index} class="btn btn-danger act-delete" onClick={remove}>
  				<i class="fa fa-trash" aria-hidden="true"></i>
  			</button>
  		</li>
    )
    
	};
}

export default withRouter(AddQuestion);