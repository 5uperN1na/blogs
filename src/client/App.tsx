import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from './views/Details';
import Pizza from './views/Home';
import Edit from './views/Edit';
import Compose from './views/Compose';
import Lulz from './views/Lulz';
import Login from './views/Login';
import Register from './views/Register';
import PrivateRoute from './component/PrivateRoute';

const App: React.FC<AppProps> = (props) => {
	return (

		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Pizza />
				</Route>

				<Route exact path="/login">
					<Login />
				</Route>


				<Route exact path="/register">
					<Register />
				</Route>


				<PrivateRoute exact path="/compose">
					<Compose />
				</PrivateRoute>

				<PrivateRoute exact path="/lulz">
					< Lulz />
				</PrivateRoute>

				<PrivateRoute exact path="/details/:blogid">
					<Details />
				</PrivateRoute>

				<Route exact path="/edit/:blogid">
					<Edit />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

interface AppProps { }

export default App;
