import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Auth from "./pages/Auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "auth",
    element: <Auth />,
  }
])

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
