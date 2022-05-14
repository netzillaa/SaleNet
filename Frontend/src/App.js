// import "./App.css";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Dashboard from "./components/pages/Dashboard";
import NewProduct from "./components/pages/NewProduct";
// import Section1 from "./components/Section1";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Header2 from "./components/Header2";
import Verification from "./components/pages/Verification";
import manageProduct from "./components/pages/manageProductPage";
import AdminDashboard from "./components/pages/Admin/AdminDashBoard";
import OrderDetails from "./components/pages/dashboard/OrderDetails";
// import Section3 from "./components/Section3";

function App() {
  return (
    <Router>

      <div className="App">
        <div className="content">
          <Switch>
            <Route path={"/signin"} component={SignIn}></Route>
            <Route path={"/register"} component={SignUp}></Route>
            <Route path={"/dashboard"} component={Dashboard}></Route>
            <Route path={"/verify"} component={Verification}></Route>
            <Route path={"/newproduct"} component={NewProduct}></Route>
            <Route path={"/manageProduct"} component={manageProduct}></Route>
            <Route path={"/admin"} component={AdminDashboard}></Route>
            <Route path={"/orderDetails"} component={OrderDetails}></Route>
            {/* <Route path={"/follow"} component={FollowUs}></Route> */}
            <Route path={"/home"} component={LandingPage}></Route>
            <Route path={"/"} component={LandingPage}></Route>
          </Switch>
        </div>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;