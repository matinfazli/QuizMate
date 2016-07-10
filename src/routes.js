// Modules
import React from "react";
import { Router, Route, IndexRoute, Redirect, browserHistory } from "react-router";

// Routes
import App from "./components/App";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Create from "./components/Dashboard/Create/Create";
import Quiz from "./components/Quiz/Quiz";

// Others
import Auth from "./helpers/auth";

function logout() {
	Auth.logout(
		(result) => { console.log(result) }
	);
}

module.exports = (
  <Router history={browserHistory}>
		<Route component={App}>

			<Route path="/">
				<IndexRoute component={Home}/>
				<Route path="register" component={Register} />
				<Route path="login" component={Login} />
				<Route path="logout" onEnter={logout} />
			</Route>

			<Route path="/quiz/:id" component={Quiz} />

			<Route path="/dashboard">
				<IndexRoute component={Dashboard} />
				<Redirect from="create" to="create/1" />
				<Route path="create/:id" component={Create} />
			</Route>

		</Route>
	</Router>
);