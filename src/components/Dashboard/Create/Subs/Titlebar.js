// Modules
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

class Titlebar extends React.Component {
	render() {
    return (
    	<div class="quiz-nav">
  			<div class="container">
    			<div class="row">
    				<div class="col-xs-10">
	    				<input type="text" class="form-control input-sm title"  placeholder="Quiz title..." onChange={this.props.handleTitle}/>
	    			</div>
	    			<div class="col-xs-2">
	    				<button class="btn btn-sm btn-success btn-block" onClick={this.props.toggleSidebar}>
	    					<i class="fa fa-cog" aria-hidden="true"></i>
	    				</button>
	    			</div>
	    		</div>
    		</div>
  		</div>
    )
	};
}

export default withRouter(Titlebar);