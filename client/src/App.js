import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Admin from './pages/Admin';
import Error from './pages/Error';
import LoginForm from './components/Login';
import RegisterForm from './components/RegistroDeUsuario';
import Navbar from './components/Navbar';
import { FormRestaurant } from './components/FormRestaurant/FormRestaurant';
import { CardDetail } from './components/cardDetail/CardDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail" component={CardDetail} />
        <Route exact path="/navbar" component={Navbar} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path={'/formrestaurant'} component={FormRestaurant} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
