// Modules
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

class AddChoice extends React.Component {
	render() {
		var { index, value, handleChoice } = this.props;

    return (
    	<div class="checkbox">

		    <input 
		    	type="checkbox"
		    />

		    <input class="form-control input-sm"
		    	type="text"
		    	value={value}
		    	onChange={handleChoice}
		    	placeholder="Choice..."
		    />

		    <button id={index} class="btn btn-sm btn-danger act-delete">
  				<i class="fa fa-trash" aria-hidden="true"></i>
  			</button>

			</div>
    )
	};
}

export default withRouter(AddChoice);