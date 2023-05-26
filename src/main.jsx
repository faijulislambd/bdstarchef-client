import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./layout/Main/Main";
import Home from "./components/pages/Home/Home";
import Blog from "./components/pages/Blog/Blog";
import Chef from "./components/pages/Chef/Chef";
import Login from "./components/pages/AuthPages/Login";
import Register from "./components/pages/AuthPages/Register";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import PageNotFound from "./components/pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => {
          return fetch("https://bdstarchefs-server-faijul144.vercel.app/chefs");
        },
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <Chef></Chef>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://bdstarchefs-server-faijul144.vercel.app/chefs/${params.id}`
          );
        },
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
