import React from "react";
import "./assets/styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routers";
import Header from "./components/Admin/Header";
import SideBar from "./components/Admin/SideBar";
function App() {
  const showRoute = (route) => {
    return routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        children={route.main}
      />
    ));
  };
  return (
    <Router>
      <>
        <Header />
        <SideBar />
        <Switch>{showRoute(routes)}</Switch>
      </>
    </Router>
  );
}

export default App;
