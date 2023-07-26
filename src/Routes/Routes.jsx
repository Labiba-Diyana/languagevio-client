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
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectecClasses/SelectedClasses";
import UserHome from "../pages/Dashboard/SelectedClasses/UserHome/UserHome";




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