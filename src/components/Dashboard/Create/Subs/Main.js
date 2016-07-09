// Modules
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

class Main extends React.Component {
	render() {
		return (
	    <div class="col-xs-12 col-sm-7">
				<div class="row">
					<div class="col-xs-12">
						<button class="btn btn-primary btn-block">Add Choice</button>
						<form class="question-form">
							<input type="text" class="form-control"  placeholder="Question title..."/>
							<div class="checkbox">
						    <input type="checkbox" checked/>
						    <input type="text" class="form-control input-sm"  placeholder="Choice..."/>
						    <button class="btn btn-sm btn-danger act-delete">
				  				<i class="fa fa-trash" aria-hidden="true"></i>
				  			</button>
							</div>
							<div class="checkbox">
						    <input type="checkbox"/>
						    <input type="text" class="form-control input-sm"  placeholder="Choice..."/>
						    <button class="btn btn-sm btn-danger act-delete">
				  				<i class="fa fa-trash" aria-hidden="true"></i>
				  			</button>
							</div>
							<div class="checkbox">
						    <input type="checkbox"/>
						    <input type="text" class="form-control input-sm"  placeholder="Choice..."/>
							</div>
							<div class="checkbox">
						    <input type="checkbox"/>
						    <input type="text" class="form-control input-sm"  placeholder="Choice..."/>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	};
}

export default withRouter(Main);

