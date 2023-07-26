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
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'home',
            element: <UserHome></UserHome>
          },
          {
            path: 'selected',
            element: <SelectedClasses></SelectedClasses>
          },
          {
            path: 'allUsers',
            element: <AllUsers></AllUsers>
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
]);