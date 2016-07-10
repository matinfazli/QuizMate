// Modules
import _ from "lodash";
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

// Components
import Titlebar from "./Titlebar/Titlebar";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

class Create extends React.Component {
	constructor() {
		super();
		this.state = {
			questionID: 1, // Current Question ID
			questionCount: 1, // Total Questions Count
			quizTitle: '', // Quiz Title
			questionList: [{ // Question List
				title: 'Question title...', // Question Title
				choices: ['','','',''] // Question Choices
			}],
			sidebar: '', // Sidebar Toggle Class
		}
		
		this.handleQuizTitle = this.handleQuizTitle.bind(this);
		this.toggleSidebar = this.toggleSidebar.bind(this);

		this.addQuestion = this.addQuestion.bind(this);
		this.addChoice = this.addChoice.bind(this);
		this.removeQuestion = this.removeQuestion.bind(this);

		this.handleTitle = this.handleTitle.bind(this);
		this.handleChoice = this.handleChoice.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ questionID: parseInt(nextProps.params.id)});
	}

	// Handle quiz title changes
	handleQuizTitle(event) {
  	this.setState({ quizTitle: event.target.value });
  }

  // Handle question title changes
	handleTitle(event) {
		var { questionID, questionList } = this.state;
		// Get the question target
		var { target } = event;
		// Set it to the state
		questionList[questionID - 1].title = target.value;
		// Save Changes
		this.setState({ questionList: questionList });
  }

  // Handle choice text changes
	handleChoice(event) {
		var { questionID, questionList } = this.state;
		// Get the choice parent node (need its ID)
  	var { id } = event.target;
  	//
  	questionList[questionID - 1].choices[id] = target.value;
		this.setState({ questionList: questionList });
  }

  // Sidebar toggler
	toggleSidebar() {
  	var { sidebar } = this.state;
  	var sidebarState = (sidebar == 'active') ? '' : 'active';
  	// Save sidebar state
  	this.setState({'sidebar': sidebarState});
  }

  // Add new question
  addQuestion() {
  	var { questionCount, questionList } = this.state;
  	// Create a new question with four empty choices
  	questionList.push({
  		title: 'New question title...',
  		choices: ['','','','']
  	});
  	// Save all the changes
  	this.setState({ 
  		questionCount: questionCount + 1, 
  		questionList: questionList 
  	});
  }

  // Add new choice
  addChoice() {
  	var { questionID, questionList } = this.state;
		// Add a new empty choice
  	questionList[questionID - 1].choices.push('');
  	// Save our changes
  	this.setState({ questionList: questionList });
  }

  // Remove a question
  removeQuestion(event) {
  	var { params } = this.props;
  	var { questionID, questionCount, questionList } = this.state;
  	// Get the question parent node ID
  	var { id } = event.target;
  	//If total questions > 1 then remove, else throw error
  	if (questionCount > 1 && id) {
  		// If we are on that question either + or -
  		// if (questionID == (id + 1)) {
  		// 	console.log(id);
  		// 	//(id == 0) ? params.id++ : params.id--;
  		// }
  		// Remove the question
  		questionList.splice(id, 1);
  		// Save changes
  		this.setState({
  			questionCount: questionCount -1,
  			questionList: questionList
  		});
  	} else if(!id) {
  		console.log('id undifined');
  	} else {
  		// Throw error
  		console.log('you need at least one question');
  	}
  }
 

	render() {
		var { questionID ,questionCount, questionList } = this.state;
		console.log(this.state);

    return (
    	<div class="dashboard quiz">

    		<Titlebar 
    			handleQuizTitle={this.handleQuizTitle}
    			questionID={questionID}
    			questionCount={questionCount}
    			toggleSidebar={this.toggleSidebar}
    		/>

    		<div class="container">
    			<div class={'row row-offcanvas ' + this.state.sidebar}>

		        <Main 
		        	data={questionList[questionID - 1]}
		        	addChoice={this.addChoice}
		        	handleTitle={this.handleTitle}
		        	handleChoice={this.handleChoice}
		        />

		        <Sidebar 
		        	data={questionList} 
		        	addQuestion={this.addQuestion}
		        	removeQuestion={this.removeQuestion}
		        />

      		</div>
    		</div>

    	</div>
    )
	};
}

export default withRouter(Create);