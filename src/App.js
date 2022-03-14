import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import AboutUs from "./Components/AboutUs"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>

       <Route exact path="/">
         <Home/>
       </Route>

       <Route path="/details">
         <AboutUs/>
       </Route>

       <Route path="/details2">
         <Contact/>
       </Route>

     </Switch>
      <Footer/>
    </Router>
  );
}

