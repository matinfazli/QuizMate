// Module Imports
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// Routes
import App from "./components/App";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Quiz from "./components/Quiz/Quiz";

import Auth from "./helpers/auth";

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