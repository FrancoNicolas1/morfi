import axios from "axios";
import swal from "sweetalert";
const urlApi = "http://localhost:5000";

function Verify(uniqueKey) {
  const key = uniqueKey.uniqueKey;
  axios
    .put(`${urlApi}/verify/${key}`)
    .then((respuesta) => {
      swal({
        title: "Cuenta Validada!",
        text: "Presiona continuar para inicia sesión",
        icon: "success",
        button: "Continuar",
      }).then(function () {
        window.location.href = "/";
      });
    })
    .catch((error) => {
      let respuesta = error.response.data;
      swal({
        title: "Error al verificar!",
        text: respuesta,
        icon: "warning",
        dangerMode: true,
        button: "Continuar",
      }).then(function () {
        window.location.href = "/";
      });
    });
  return <></>;
}

export default Verify;
