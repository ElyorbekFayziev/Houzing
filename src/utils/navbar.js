import React from 'react';
import useId from '../hooks/useId';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
const HomePage = React.lazy(()=> import('../pages/Home'));
const PropertiesPage = React.lazy(()=> import('../pages/Properties'));


export const navbar = [
  {
    id: useId,
    element: 
    (<React.Suspense fallback={<React.Fragment><h1>Loading...</h1></React.Fragment>}>
      <HomePage />
    </React.Suspense>),
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: 
    (<React.Suspense fallback={<React.Fragment><h1>Loading...</h1></React.Fragment>}>
    <PropertiesPage />
   </React.Suspense>),
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