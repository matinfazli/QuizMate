// Module Imports
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// Routes
import App from "./pages/App";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";

import Auth from "./auth";

const mountNode = document.getElementById('app');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path="/" component={Home} />
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
			<Route path="/logout" onEnter={logout} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/quiz/:id" component={Quiz} />
		</Route>
	</Router>,
mountNode);

function logout() {
	Auth.logout(
		(result) => { console.log(result) }
	);
}