import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Main Layout/MainLayout.jsx';
import ErrorPage from './components/Error Page/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import AllReviews from './components/All Reviews/AllReviews.jsx';
import AddReview from './components/Add Review/AddReview.jsx';
import MyReviews from './components/My Reviews/MyReviews.jsx';
import GameWatchList from './components/WatchList/GameWatchList.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider, { AuthContext } from './components/Providers/AuthProvider.jsx';
import PrivateRoute from './components/Route/PrivateRoute.jsx';
import Register from './components/Register/Register.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewDetails from './components/All Reviews/ReviewDetails.jsx';
import UpdateReview from './components/My Reviews/UpdateReview.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:() => fetch('https://chill-gamer-server-wheat.vercel.app/addReview/top')
      },
      {
        path: '/allReviews',
        element: <AllReviews></AllReviews>,
        loader:() => fetch('https://chill-gamer-server-wheat.vercel.app/addReview')
      },
      {
        path:'/review/:id',
        loader:({params}) => fetch(`https://chill-gamer-server-wheat.vercel.app/review/${params.id}`),
        element:<PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>
      },
      {
        path: '/addReview',
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {
        path: '/myReviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path:'/updateReview/:id',
        loader:({params}) => fetch(`https://chill-gamer-server-wheat.vercel.app/review/${params.id}`),
        element:<PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
      },
      {
        path: '/myWatchList',
        element: <PrivateRoute><GameWatchList></GameWatchList></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
