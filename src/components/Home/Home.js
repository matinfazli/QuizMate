// Modules
import _ from "lodash";
import React from "react";
import { withRouter, browserHistory } from "react-router";

// Components
import QuizCard from "./QuizCard";

// Others
import Auth from "../../helpers/auth";
import Spinner from "../_/Spinner/Spinner";


var firebaseRef = firebase.database().ref('quiz-feed/');

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			'spinner': true,
			'quizes': null
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
		var quizFeed = (quizData, quizName) => {
      return (<QuizCard key={quizName} name={quizName} data={quizData} />);
    }

    if (this.state.spinner) {
    	return ( <Spinner /> )
    } else {
			return (
				<div class="container">
					<div class="row">
						{_.map(this.state.quizes, (quizData, quizName) => {
							return quizFeed(quizData, quizName) 
						})}
					</div>
				</div>
			);
		}
	};
}

export default withRouter(Home);