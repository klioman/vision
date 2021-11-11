import { isAuth, isGuest } from 'routes/authMiddlewares';
import Home from 'pages/Dashboard/Home';
import Login from 'pages/Auth/Login';

// ==========================================:
const routesList = [
	{
		path: '/',
		component: isAuth(Home),
	},
	{
		path: '/login',
		component: isGuest(Login),
	},
];

export default routesList;
