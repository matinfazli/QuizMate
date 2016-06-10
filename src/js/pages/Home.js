import React from "react";
import Auth from "../auth";
import _ from "lodash";
import { withRouter, browserHistory } from "react-router";

// Components
import QuizCard from "../components/QuizCard";

var firebaseRef = firebase.database().ref('quiz-list/');

class Home extends React.Component {
	constructor() {
		super();
		this.state = {'quizes': null}
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
		  this.setState({'quizes': data.val()});
		}.bind(this));
	}

	detachFirebase() {
    firebaseRef.off();
  }

	render() {
		var createQuiz = (quizData, quizName) => {
      return <QuizCard key={quizName} name={quizName} data={quizData} />;
    };

		return (
			<div class="container">
				<div class="row">
					{_.map(this.state.quizes, (quizData, quizName) => { return createQuiz(quizData, quizName) })}
				</div>
			</div>
		);

	};
}

export default withRouter(Home);