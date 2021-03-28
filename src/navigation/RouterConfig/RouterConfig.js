import { Redirect } from 'react-router-dom';
import Home from '../../screens/Home';
import Login from '../../screens/Login';

const RouterConfig = [
  {
    path: '/',
    component: () => <Redirect to="/homepage" />,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop',
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop - Login',
  },
  {
    path: '/homepage',
    component: Home,
    exact: true,
    auth: false,
    pageTitle: 'Aware Laptop - Homepage',
  },
];

export default RouterConfig;
