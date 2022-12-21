import useId from '../hooks/useId';
import HomePage from '../pages/Home';
import Login from '../pages/Login';
import Properties from '../pages/Properties';
import Signup from '../pages/Signup';

export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Properties />,
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Login />,
    title: 'Login',
    path: '/login',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <Signup />,
    title: 'signup',
    path: '/signup',
    private: false,
    hidden: true,
  },
];