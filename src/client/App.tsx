import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from './views/Details';
import Home from './views/Home';
import Edit from './views/Edit';
import Compose from './views/Compose';


const App: React.FC<AppProps> = (props) => {
	return (

		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/compose">
					<Compose />
				</Route>

				<Route exact path="/details/:blogid">
					<Details />
				</Route>
				
				<Route exact path="/edit/:blogid">
					<Edit />
				</Route>
			</Switch>
		</BrowserRouter>

    );
}

interface AppProps { }

export default App;
