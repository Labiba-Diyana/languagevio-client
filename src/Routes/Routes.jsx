import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";

import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddAClass from "../pages/Dashboard/AddAClass/AddAClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import InstructorRoute from "./InstructorRoute";
import FeedBack from "../pages/Dashboard/FeedBack/FeedBack";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import LostPage from "../pages/LostPage/LostPage";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: 'home',
            element: <UserHome></UserHome>
          },
          // students
          {
            path: 'selected',
            element: <SelectedClasses></SelectedClasses>
          },
          {
            path: 'payment/:id',
            element: <Payment></Payment>
          },
          {
            path: 'enrolled',
            element: <EnrolledClasses></EnrolledClasses>
          },
          {
            path: 'history',
            element: <PaymentHistory></PaymentHistory>
          },
          // instructors
          {
            path: 'addAClass',
            element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
          },
          {
            path: 'myClasses',
            element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
          },
          // admin
          {
            path: 'allUsers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
          },
          {
            path: 'manageClasses',
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path: 'feedback/:id',
            element: <FeedBack></FeedBack>,
          }
        ]
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      }
    ]
  },
  {
    path: '*',
    element: <LostPage></LostPage>
  }
]);