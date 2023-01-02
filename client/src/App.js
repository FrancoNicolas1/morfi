import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/aboutus" component={AboutUs}/>
    <Route exact path="/admin" component={Admin}/>
    <Route path="*" component={Error}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
