import React from "react";
import Auth from "../auth";
import { withRouter, browserHistory } from "react-router";

class Register extends React.Component {
	constructor() {
		super();
		this.register = this.register.bind(this);
	}

	componentWillMount() {
		Auth.getAuth((user) => {
			if (user) browserHistory.push('/');
		});
	}

	register(e) {
			e.preventDefault();
			const { email, password, confirmPassword } = this.refs;

			if (password.value === confirmPassword.value) {
				Auth.register(email.value, password.value, (err) => { console.log(err) })
			}
	}

	render() {
		return (
			<div class="container">
				<div class="auth">
					<p class="heading">Register</p>
					<form class="form-horizontal" onSubmit={this.register}>
							<div class="form-group">
									<input ref="email" class="form-control" type="email" placeholder="Email" required/>
									<input ref="password" class="form-control" type="password" placeholder="Password" required/>
									<input ref="confirmPassword" class="form-control" type="password" placeholder="Confirm Password" required/>
									<button type="submit" class="btn btn-primary btn-block">Register</button>
							</div>
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(Register);