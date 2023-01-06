import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { FormRestaurant } from './components/FormRestaurant/FormRestaurant';
import Home from './pages/Home';
import { CardDetail } from './components/cardDetail/CardDetail';
import AboutUs from './pages/AboutUs';
import Admin from './pages/Admin';
import Error from './pages/Error';
import LoginForm from './components/Login';
import RegisterForm from './components/RegistroDeUsuario';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={CardDetail} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path={'/formrestaurant'} component={FormRestaurant} />
        <Route exact path="/admin" component={Admin} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
