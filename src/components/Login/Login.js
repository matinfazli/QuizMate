import React from "react";
import Auth from "../../helpers/auth";
import { withRouter, browserHistory } from "react-router";

class Login extends React.Component {
	constructor() {
		super();
		this.login = this.login.bind(this);
	}

	componentWillMount() {
		Auth.getAuth((user) => {
			if (user) browserHistory.push('/');
		});
	}

	login(e) {
		e.preventDefault();
		const { email, password } = this.refs;
		Auth.login(email.value, password.value, (err) => { console.log(err) });
	}

	render() {
		return (
			<div class="container">
				<div class="auth">
					<p class="heading">Login</p>
					<form class="form-horizontal" onSubmit={this.login}>
						<div class="form-group">
							<input ref="email" class="form-control" type="email" placeholder="Email" required/>
							<input ref="password" class="form-control" type="password" placeholder="Password" required/>
							 <button type="submit" class="btn btn-primary btn-block">Login</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(Login);