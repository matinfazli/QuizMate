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
			questionID: 1,
			questionCount: 1,
			quizTitle: '',
			questionList: [{
				title: 'Question title...',
				choices: [
					{text:'', chk: true},
					{text:'', chk: false},
					{text:'', chk: false},
					{text:'', chk: false}
				]
			}],
			sidebar: '',
		}
		
		this.handleQuizTitle = this.handleQuizTitle.bind(this);
		this.toggleSidebar = this.toggleSidebar.bind(this);

		this.addQuestion = this.addQuestion.bind(this);
		this.addChoice = this.addChoice.bind(this);
		this.removeQuestion = this.removeQuestion.bind(this);
		this.removeChoice = this.removeChoice.bind(this);

		this.handleTitle = this.handleTitle.bind(this);
		this.handleChoice = this.handleChoice.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
	}

	// Update page on prop change
	componentWillReceiveProps(nextProps) {
		this.setState({ questionID: parseInt(nextProps.params.id)});
	}

	// Handle quiz title changes
	handleQuizTitle(event) {
  	this.setState({ quizTitle: event.currentTarget.value });
  }

  // Sidebar toggler
	toggleSidebar() {
  	var { sidebar } = this.state;
  	// Toggle activate class
  	this.setState({'sidebar': ((sidebar == 'active') ? '' : 'active')});
  }

  // Handle question title changes
	handleTitle(event) {
		var { questionID, questionList } = this.state;
		// Get the question input
		var { value } = event.currentTarget;
		// Set it to the state
		questionList[questionID - 1].title = value;
		// Save Changes
		this.setState({ questionList: questionList });
  }

  // Handle choice text changes
	handleChoice(event) {
		var { questionID, questionList } = this.state;
		// Get the choice input
  	var { id, value } = event.currentTarget;
  	// Set it to the state
  	questionList[questionID - 1].choices[id].text = value;
  	// Save Changes
		this.setState({ questionList: questionList });
  }

  // Add new question
  addQuestion() {
  	var { questionCount, questionList } = this.state;
  	// Create a new question with four empty choices
  	questionList.push({
  		title: 'New question title...',
  		choices: [
				{text:'', chk: true},
				{text:'', chk: false},
				{text:'', chk: false},
				{text:'', chk: false}
			]
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
  	questionList[questionID - 1].choices.push({text: '', chk: false});
  	// Save our changes
  	this.setState({ questionList: questionList });
  }

  // Remove a question
  removeQuestion(event) {
  	var { questionID, questionCount, questionList } = this.state;
  	// Get the question ID
  	var { id } = event.currentTarget;
  	var targetID = parseInt(id);
  	// If total questions > 1 then remove, else throw error
  	if (questionCount > 1) {
  		// Logically + or - current question and send
  		var QID = questionID;
  		if (QID != 1) { QID -= 1 }
  		browserHistory.push('/dashboard/create/' + QID);
  		// Remove the question
  		questionList.splice(targetID, 1);
  		// Save changes
  		this.setState({
  			questionCount: questionCount - 1,
  			questionList: questionList
  		});
  	} else {
  		console.log('you need at least one question');
  	}
  }

  // Remove a choice
  removeChoice(event) {
  	event.preventDefault();
  	var { questionID, questionList } = this.state;
  	// Get the choice ID
  	var { id } = event.currentTarget;
  	var targetID = parseInt(id);
  	// Count choices
  	var choiceList = questionList[questionID - 1].choices;
  	var choiceCount = _.size(choiceList);
  	// If total choices > 1 then remove, else throw error
  	if (choiceCount > 2) {
  		// If its checkbox was checked pass it to prev or next
  		var checked = choiceList[targetID].chk;
  		if (checked) { 
  			if (targetID > 0) {
  				choiceList[targetID - 1].chk = true;
  			} else {
  				choiceList[targetID + 1].chk = true;
  			}
  		}
  		// Remove the choice
  		choiceList.splice(targetID, 1);
  		// Save changes
  		this.setState({ questionList: questionList });
  	} else {
  		console.log('you need at least two choices');
  	}
  }

  // Handle choices checkbox
  handleCheckbox(event) {
  	var { questionID, questionList } = this.state;
  	// Get the checkbox ID
  	var { id } = event.currentTarget;
  	var targetID = parseInt(id);
  	// Get the choices list
  	var choiceList = questionList[questionID - 1].choices;
  	// Get the target choice checkbox element
  	var checkbox = choiceList[targetID].chk;
  	// Set all false except the chosen one
  	if (!checkbox) {
  		_.forEach(choiceList, function(value, key) {
  			value.chk = (targetID == key) ? true : false;
			});
  	}
  	this.setState({ questionList: questionList });
  }

	render() {
		//console.log(this.state);
		var { sidebar, questionID ,questionCount, questionList } = this.state;

    return (
    	<div class="dashboard quiz">

    		<Titlebar 
    			handleQuizTitle={this.handleQuizTitle}
    			questionID={questionID}
    			questionCount={questionCount}
    			toggleSidebar={this.toggleSidebar}
    		/>

    		<div class="container">
    			<div class={'row row-offcanvas ' + sidebar}>

		        <Main 
		        	data={questionList[questionID - 1]}
		        	addChoice={this.addChoice}
		        	handleTitle={this.handleTitle}
		        	handleChoice={this.handleChoice}
		        	removeChoice={this.removeChoice}
		        	handleCheckbox={this.handleCheckbox}
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