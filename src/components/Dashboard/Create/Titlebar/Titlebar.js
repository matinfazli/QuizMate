// Modules
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

class Titlebar extends React.Component {
	render() {
		var { handleQuizTitle, toggleSidebar, questionCount, questionID} = this.props;

    return (
    	<div class="quiz-nav">
  			<div class="container">
    			<div class="row">
    				<div class="col-xs-8 col-sm-10">
	    				<input type="text" class="form-control input-sm title"  placeholder="Quiz title..." onChange={handleQuizTitle}/>
	    			</div>
	    			<div class="col-xs-2">

	    				<p class="counter">
	    					<span class="hidden-xs">Question: </span>
	    					<span>{questionID}/{questionCount}</span>
	    				</p>
	    			</div>
	    			<div class="col-xs-2 visible-xs">
	    				<button class="btn btn-sm btn-success btn-block" onClick={toggleSidebar}>
	    					<i class="fa fa-edit" aria-hidden="true"></i>
	    				</button>
	    			</div>
	    		</div>
    		</div>
  		</div>
    )
	};
}

export default withRouter(Titlebar);