import { createBrowserRouter } from "react-router-dom";
import { Home, Product, Shop } from "../pages";
import MainLayout from "../layout/MainLayout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);
