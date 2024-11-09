import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Coffee from "./Components/Coffee";
import Dashboard from "./Components/Dashboard";
import CoffeeCard from "./Components/CoffeeCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/category/:category",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("/coffees.json"),
          },
          {
            path: "/",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("/coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffee></Coffee>,
        loader: () => fetch("/coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
