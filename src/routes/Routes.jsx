import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import AdminLayout from "../layouts/AdminLayout";
import Users from "../pages/Users/Users";
import AddEvent from "../pages/AddEvent/AddEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/users',
      }
    ]
  },
  {
    path:'/admin',
    element:<AdminLayout></AdminLayout>,
    children:[
      {
        path:'/admin/users',
        element:<Users></Users>
      },
      {
        path:'/admin/addevent',
        element:<AddEvent></AddEvent>
      }
    ]
  }
]);

export default router