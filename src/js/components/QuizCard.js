import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

var subjects = {
	'Physics': 'fa fa-gears',
	'Programming': 'fa fa-code'
}

class QuizCard extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		this.state = { 'quiz': {
			'id': this.props.data.id,
			'name': this.props.name,
			'subject': this.props.data.subject,
			'questions': this.props.data.questions
		}}
	}

	render() {
		const { quiz } = this.state;
		const linkToQuiz = '/quiz/' + quiz.id;

		return (
			<div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
				<div class="quiz-card">

					<i class={subjects[quiz.subject]} aria-hidden="true"></i>

					<div class="details">
						<p class="subject">{quiz.subject}</p>
						<p class="name">{quiz.name}</p>
						<p class="questions">{quiz.questions} Questions</p>
					</div>

					<Link to={linkToQuiz} type="submit" class="btn btn-success btn-block">Take Quiz</Link>
				</div>
			</div>
		);
	}

}

export default withRouter(QuizCard);