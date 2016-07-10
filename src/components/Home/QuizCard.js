import React from "react";
import { Link, withRouter, browserHistory } from "react-router";

class QuizCard extends React.Component {
	render() {
		const { id, data } = this.props;

		return (
			<div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
				<div class="quiz-card">

					<i class="fa fa-file-text-o" aria-hidden="true"></i>

					<div class="details">
						<p class="name">{data.title}</p>
						<p class="questions">{data.count} Questions</p>
					</div>

					<Link to={'/quiz/' + id} type="submit" class="btn btn-success btn-block">Take Quiz</Link>
				</div>
			</div>
		);
	}

}

export default withRouter(QuizCard);