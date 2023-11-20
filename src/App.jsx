
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Games from './pages/Games/Games'
import Error from "./pages/Error";
import "./index.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/games",
    element: <Games />,
  }
])

const App = () => {
  return <RouterProvider router={router} />
};


export default App;