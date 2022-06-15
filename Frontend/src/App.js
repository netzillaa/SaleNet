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
import AdminDashBoard from "./components/pages/Admin/AdminDashBoard";
import CheckOut from "./components/pages/dashboard/checkout/CheckOut";
import editProduct from "./components/pages/editProduct";
import manageUser from "./components/pages/Admin/manageUserPage";
import editUser from "./components/pages/Admin/editUser";
import OrderDetails from "./components/pages/dashboard/checkout/OrderDetails";
import QRUploader from "./components/pages/dashboard/checkout/QRUploader";
import customerSupport from "./components/pages/customerSupport";
import Error from "./components/pages/Error"
import AdminLogin from "./components/pages/Admin/AdminLogin";
import editProfile from "./components/pages/editUserProfile";
import editShop from "./components/pages/editShop";
import manageInvoice from "./components/pages/ManageInvoice";
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
            <Route path={"/editProduct"} component={editProduct}></Route>
            <Route path={"/admin"} component={AdminDashBoard}></Route>
            <Route path={"/adminLogin"} component={AdminLogin}></Route>
            <Route path={"/manageUser"} component={manageUser}></Route>
            <Route path={"/checkOut"} component={CheckOut}></Route>
            <Route path={"/orderDetails"} component={OrderDetails}></Route>
            <Route path={"/editUser"} component={editUser}></Route>
            <Route path={"/editProfile"} component={editProfile}></Route>
            <Route path={"/editShop"} component={editShop}></Route>
            {/* <Route path={"/403"} component={Error}></Route> */}
            {/* <Route path={"/follow"} component={FollowUs}></Route> */}
            <Route path={"/qrUploader"} component={QRUploader}></Route>
            <Route path={"/support"} component={customerSupport}></Route>
            <Route path={"/manageInvoice"} component={manageInvoice}></Route>
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