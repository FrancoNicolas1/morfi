import React from "react";
import { Route, Redirect } from "react-router-dom";
import swal from "sweetalert";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <>
          {swal({
            title: "Usuario no encontrado",
            text: "Por favor ingrese al sitio web para continuar",
            type: "warning",
          }).then(function () {
            window.location.href = "/";
          })}
        </>
      )
    }
  />
);

export default ProtectedRoute;
