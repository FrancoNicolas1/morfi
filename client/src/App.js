import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { FormRestaurant } from "./components/FormRestaurant/FormRestaurant";
import Home from "./pages/Home";
import { CardDetail } from "./components/cardDetail/CardDetail";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import LoginForm from "./components/Login";
import RegisterForm from "./components/RegistroDeUsuario";
import Checkout from "./components/MercadoPago/Checkout";
import Verify from "./components/Verify/Verify.jsx";
import UserProfile from "./components/UserProfile/UserProfile";
import Admin1 from "./components/Admin/Admin";
import { Product } from "./components/product/Product";
import FormProducts from "./components/FormProducts/FormProducts";
import Support from "./components/Support/Support";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { loginGoogle, refrescarToken } from "./redux/actions";
import ProtectedRoute from "./pages/protectedRoute";
import InfoGoogleCliente from "./components/MercadoPago/InfoGoogleCliente";
function App() {
  //Trae el dispatch
  const dispatch = useDispatch();
  //Mete un useEffect que se activa cada vez que cambia el token de refresco
  const user = useSelector((state) => state.user);
  console.log(user && user.length > 0);

  //Aca me traigo el usuario, pregunto si esta lleno y si esta lleno esta autenticado, entonces puede acceder a las rutas protegidas por ProtectedRoute
  const isAuthenticated =
    user && user.length > 0 && !user?.[0]?.aud && !user?.[0].azp ? true : false;
  console.log(isAuthenticated, "A");
  const accessToken = Cookies.get("access_token");
  const id_token = Cookies.get("id_token");
  const refreshToken = Cookies.get("refresh_token");

  useEffect(() => {
    // Dispatch the LOGIN action to save the new tokens
    console.log(id_token, "los tokens");
    if (accessToken && id_token) {
      console.log("ESTOY ENTRANDO A LA FUNCION");
      dispatch(loginGoogle(accessToken, id_token));
    }

    if (refreshToken !== undefined) {
      console.log("entro a refrescar el token");
      setInterval(refrescarToken(refreshToken), 60 * 60 * 1000); // refresh token
    }
    //Este metodo genera un intervalo que ejecuta cada 60 minutos la funcion refresh
  }, [accessToken, id_token, refreshToken]);
  //ENVUELVO LAS RUTAS QUE NO SE PUEDEN ACCEDER GRATIS EN PROTECTEDROUTES
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute
          exact
          path={"/formrestaurant"}
          component={FormRestaurant}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          exact
          path="/admin"
          component={Admin1}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          exact
          path="/cartRegister"
          component={InfoGoogleCliente}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          exact
          path={"/productform"}
          component={FormProducts}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          exact
          path="/checkout"
          component={Checkout}
          isAuthenticated={isAuthenticated}
        />

        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={CardDetail} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/verify/:uniqueKey" component={Verify} />
        <Route exact path={"/userprofile"} component={UserProfile} />
        <Route exact path={"/support"} component={Support} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
