// Modules
import _ from "lodash";
import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

// Components
import Titlebar from "./Subs/Titlebar";
import Sidebar from "./Subs/Sidebar";
import Main from "./Subs/Main";

class Create extends React.Component {
	constructor() {
		super();
		this.state = {
			'sidebar': '',
			'quiz': {
				'title': '',
				'questions': {
					'Which one is correct?': {
						'a': 'foo',
						'b': 'bar',
						'c': 'cal'
					},
					'Our next question?': {
						'a': 'foo',
						'b': 'bar',
						'c': 'cal'
					}
				}
			}
		}
		
		this.handleTitle = this.handleTitle.bind(this);
		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.saveData = this.saveData.bind(this);
	}

	//Ttitlebar
	handleTitle(event) {
  	this.saveData({ title: event.target.value });
  }
	toggleSidebar() {
  	var { sidebar } = this.state;
  	var state = (sidebar == 'active') ? '' : 'active';
  	this.setState({'sidebar': state}); 
  }

  saveData(newData) {
    this.setState({
      quiz: Object.assign({}, this.state.quiz, newData)
    });
  }

	render() {
		var { quiz } = this.state;
		var questionList = Object.keys(quiz.questions);

    return (
    	<div class="dashboard quiz">

    		<Titlebar handleTitle={this.handleTitle} toggleSidebar={this.toggleSidebar} />

    		<div class="container">
    			<div class={'row row-offcanvas ' + this.state.sidebar}>
		        <Main />
		        <Sidebar data={questionList} />
      		</div>
    		</div>

    	</div>
    )
	};
}

export default withRouter(Create);