import React from 'react';
// import Cong from './Cong';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
//   import "./index.css";
import Form  from'../Pages/Form';
import Cong from '../Pages/Cong';
  


 function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Form/>,
        },
        {
          path: "/Cong",
          element:<Cong message=' "All Fields Are Required!"'/>,
        },
     
      ]);
  return (
    <RouterProvider router={router} />
  )
}

export default Router