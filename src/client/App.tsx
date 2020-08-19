import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from './views/Details';
import Pizza from './views/Home';
import Edit from './views/Edit';
import Compose from './views/Compose';
// import Lulz from './views/Lulz';
import Login from './views/Login';
import Register from './views/Register';
import Donate from './views/Donate';
import Contact from './views/Contact';
import PrivateRoute from './component/PrivateRoute';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51HHGCSFz7P0F6FKvkGxOHtuouQqF5ubVdGV6RV0VrsAC3mnbmitxBaD9k5ca8Guga0ycj0WTDntMYkul6BSdD1aq00fGnZbSxa');


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

				{/* <PrivateRoute exact path="/lulz">
					< Lulz />
				</PrivateRoute> */}

				<PrivateRoute exact path="/details/:blogid">
					<Details />
				</PrivateRoute>

				<Route exact path="/edit/:blogid">
					<Edit />
				</Route>


				<Route exact path="/donate">
					<Elements stripe={stripePromise}>
						<Donate />
					</ Elements >
				</Route>

				<Route exact path="/contact">
					<Contact />
				</Route>






			</Switch>
		</BrowserRouter>
	);
}

interface AppProps { }

export default App;
