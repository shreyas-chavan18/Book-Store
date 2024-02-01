import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About";
import SingleBook from "../components/Shop/SingleBook";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import UploadBook from "../components/Dashboard/UploadBook";
import ManageBooks from "../components/Dashboard/ManageBooks";
import EditBooks from "../components/Dashboard/EditBooks";
import SignUp from "../components/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../components/Login";
import Logout from "../components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/book/${params.id}`),
      },
    ],
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);

export default router;
