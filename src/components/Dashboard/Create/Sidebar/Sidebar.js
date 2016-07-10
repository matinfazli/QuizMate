// Modules
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

// Components
import Question from './AddQuestion';

class Sidebar extends React.Component {

	render() {
		var { data, addQuestion, publishQuiz } = this.props;
		
		var questionFeed = (value, key) => {
      return (
      	<Question 
      		key={key}
      		index={key}
      		title={value.title}
      		toLink={'/dashboard/create/' + (key + 1)}
      		remove={this.props.removeQuestion}
				/>
      );
    }

    return (
    	<div class="col-xs-12 col-sm-5 sidebar-offcanvas">

    		{/* Add and Publish button */}
    		<div class="row">
	    		<div class="col-xs-6">
	    			<button class="btn btn-primary btn-block" onClick={addQuestion}>Add Question</button>
	    		</div>
	    		<div class="col-xs-6">
	    			<button class="btn btn-success btn-block" onClick={publishQuiz}>Publish Quiz!</button>
	    		</div>
    		</div>

    		{/* Mapping question list */}
      	<ol class="question-list">
					{_.map(data, function(value, key) { return questionFeed(value, key) })}
      	</ol>

      </div>
    )
	};
}

export default withRouter(Sidebar);