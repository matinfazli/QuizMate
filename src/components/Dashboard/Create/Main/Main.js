// Modules
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

// Components
import Choice from './AddChoice';

class Main extends React.Component {
	render() {
		var { data, addChoice, handleTitle, handleChoice } = this.props;
		
		var choiceList = (value, key) => {
      return (
      	<Choice 
      		key={key}
      		index={key}
      		value={value}
      		handleChoice={handleChoice}
				/>
      );
    }

		return (
	    <div class="col-xs-12 col-sm-7">

				<button class="btn btn-primary btn-block" onClick={addChoice}>Add Choice</button>

				<form class="question-form">
					<input class="form-control"
						type="text"
						value={data.title}
						onChange={handleTitle}
						placeholder="Question title..." 
					/>
					{_.map(data.choices, function(value, key) { return choiceList(value, key) })}
				</form>

			</div>
		)
	};
}

export default withRouter(Main);

