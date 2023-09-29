import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import ProductsDetails from "./pages/ProductsDetails/ProductsDetails";
import Layout from "./components/layout/Layout";
import Private from "./private/Private";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/home',
        element: <Private><Home /></Private>
      },
      {
        path: '/products/:type',
        element: <Private><Products /></Private>
      },
      {
        path: '/products/:type/:id',
        element: <Private><ProductsDetails /></Private>
      }
    ]
  }
])

export default router