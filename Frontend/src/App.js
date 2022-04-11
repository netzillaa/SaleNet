// import "./App.css";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Dashboard from "./components/pages/Dashboard";
// import Section1 from "./components/Section1";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
// import Section3 from "./components/Section3";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <LandingPage />
        {/* <Navbar />
      <Section1 /> */}
        {/* <Section2 />
      <Section3 /> */}
        <div className="content">
          <Switch>
            <Route path={"/signin"} component={SignIn}></Route>
            <Route path={"/register"} component={SignUp}></Route>
            <Route path={"/dashboard"} component={Dashboard}></Route>
            {/* <Route path={"/ContactUs"} component={Section1}></Route> */}
            <Route path={"/"} component={Home}></Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;