import React from 'react';
import useId from '../hooks/useId';
import Signup from '../components/Signup';
import RegisterPage from '../pages/Register';
import MyProfilePage from '../pages/MyProfile';
import AddHousePage from '../pages/AddHouse';
const HomePage = React.lazy(()=> import('../pages/Home'));
const PropertiesPage = React.lazy(()=> import('../pages/Properties'));
const Favorite = React.lazy(()=> import('../pages/Favorite'));
const HouseItem = React.lazy(()=> import('../pages/HouseItem'));


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
    element: 
    (<React.Suspense fallback={<React.Fragment><h1>Loading...</h1></React.Fragment>}>
    <Favorite />
   </React.Suspense>),
    title: 'Favorite',
    path: '/favourite',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: 
    (<React.Suspense fallback={<React.Fragment><h1>Loading...</h1></React.Fragment>}>
    <HouseItem />
   </React.Suspense>),
    title: 'ProperHouseItemties',
    path: '/properties/:id',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <RegisterPage />,
    title: 'Login',
    path: '/signin',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <MyProfilePage />,
    title: 'MyProfile',
    path: '/myprofile',
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <AddHousePage />,
    title: 'MyProfile',
    path: '/myprofile/newhouse',
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