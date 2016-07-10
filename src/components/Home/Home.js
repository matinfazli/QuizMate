// Modules
import _ from "lodash";
import React from "react";
import { withRouter, browserHistory } from "react-router";

// Components
import QuizCard from "./QuizCard";

// Others
import Auth from "../../helpers/auth";
import Spinner from "../_/Spinner/Spinner";


var firebaseRef = firebase.database().ref('quizes');

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			'spinner': true,
			'quizes': ''
		}
	}

	componentWillMount() {
		Auth.getAuth((user) => {
			if (!user) browserHistory.push('/login');
		});
		this.attachFirebase();
	}

	componentWillUnmount() {
		this.detachFirebase();
	}

	attachFirebase() {
		firebaseRef.on('value', function(data) {
		  this.setState({
		  	'spinner': false,
		  	'quizes': data.val()
		  });
		}.bind(this));
	}

	detachFirebase() {
    firebaseRef.off();
  }

	render() {
		var quizList = (value, key) => {
      return (
      	<QuizCard 
      		key={key}
      		id={key} 
      		data={value} 
      	/>
      );
    }

    if (this.state.spinner) {
    	return ( <Spinner /> )
    } else {
			return (
				<div class="container">
					<div class="row">
						{_.map(this.state.quizes, (value, key) => { return quizList(value, key) })}
					</div>
				</div>
			);
		}
	};
}

export default withRouter(Home);

						// {_.map(this.state.quizes, (quizData, quizName) => {
						// 	return quizFeed(quizData, quizName) 
						// })}