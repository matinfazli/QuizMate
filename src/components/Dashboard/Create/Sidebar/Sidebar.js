// Modules
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

// Components
import Question from './AddQuestion';

class Sidebar extends React.Component {
	render() {
		var questionFeed = (value, key) => {
      return (
      	<Question 
      		key={key}
      		index={key}
      		title={value}
      		toLink={'/dashboard/create/' + (key + 1)}
      		remove={this.props.removeQuestion}
				/>
      );
    }

    return (
    	<div class="col-xs-12 col-sm-5 sidebar-offcanvas">
      	<button class="btn btn-success btn-block" onClick={this.props.addQuestion}>Add Question</button>
      	<ol class="question-list">
					{_.map(this.props.data, function(value, key) { return questionFeed(value.title, key) })}
      	</ol>
      </div>
    )
	};
}

export default withRouter(Sidebar);