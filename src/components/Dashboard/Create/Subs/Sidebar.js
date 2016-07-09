// Modules
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

// Components
import Question from '../Add/Question';

class Sidebar extends React.Component {
	render() {
		var questionFeed = (value, key) => {
      return (
      	<Question 
      		key={key}
      		index={key}
      		title={value}
      		toLink={'/dashboard/create/' + (key+1)}
				/>
      );
    }

    return (
    	<div class="col-xs-12 col-sm-5 sidebar-offcanvas">
      	<button class="btn btn-success btn-block" onClick={this.addQuestion}>Add Question</button>
      	<ol class="question-list">
					{_.map(this.props.data, function(value, key) { return questionFeed(value, key) })}
      	</ol>
      </div>
    )
	};
}

export default withRouter(Sidebar);