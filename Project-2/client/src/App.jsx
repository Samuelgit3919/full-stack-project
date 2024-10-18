// import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

// import About from './Pages/Register';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Write from "./Pages/Write";
import Single from "./Pages/Single";
import Navbar from './components/Navabr';
import Footer from './components/Footer';
import Home from './Pages/Home';

import './styles.scss';

import "./App.css"

// import Navbar from './components/Navabr';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <Single />
      },
      {
        path: '/write',
        element: <Write />
      },
    ],

  },

  {
    path: "/register",
    element: <Register />
  },

  {
    path: "/login",
    element: <Login />
  },
])



const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
};

// 10th min


export default App;
