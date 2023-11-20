
import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Error from "./pages/Error";
import "./index.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  }
])

const App = () => {
  return <RouterProvider router={router} />
};


export default App;