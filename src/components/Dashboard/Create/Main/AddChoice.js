// Modules
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

class AddChoice extends React.Component {
	render() {
		var { index, value, checked, removeChoice, handleChoice, handleCheckbox } = this.props;

    return (
    	<div class="checkbox">

		    <input
		    	type="checkbox"
		    	id={index}
		    	checked={(checked) ? 'checked' : ''}
		    	onChange={handleCheckbox}
		    />

		    <input class="form-control input-sm"
		    	type="text"
		    	id={index}
		    	value={value}
		    	onChange={handleChoice}
		    	placeholder="Choice..."
		    />

		    <button class="btn btn-sm btn-danger act-delete" id={index}  onClick={removeChoice}>
  				<i class="fa fa-trash" aria-hidden="true"></i>
  			</button>

			</div>
    )
	};
}

export default withRouter(AddChoice);