import React from "react";
import Dashboard from "components/Admin/Dashboard";
import Products from "components/Admin/Products";
import Category from "components/Admin/Category";
import Orders from "components/Admin/Orders";
import Customers from "components/Admin/Customers";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Dashboard />,
  },
  {
    path: "/products",
    main: () => <Products />,
  },
  {
    path: "/category",
    main: () => <Category />,
  },
  {
    path: "/orders",
    main: () => <Orders />,
  },
  {
    path: "/customers",
    main: () => <Customers />,
  },
  {
    path: "/logout",
    main: () => <h2>Shoelaces</h2>,
  },
];
export default routes;
