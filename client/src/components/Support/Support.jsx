import Accordion from "react-bootstrap/Accordion";
import Navbar from "../Navbar";
import "./Support.css";

function Support() {
  return (
    <div className="conteiner">
      <Navbar />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Qué es Morfi?</Accordion.Header>
          <Accordion.Body>
            Morfi es una plataforma en donde vas a poder comprar comida desde la
            comodidad de tu hogar y pagar con diversos medios.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            ¿Cómo se puede comprar en la página ?
          </Accordion.Header>
          <Accordion.Body>
            Para poder comprar en nuestro sitio web, deberás ser usuario. Para
            ello, a través de nuestro formulario, deberás completar tus datos y
            validar tu correo electrónico. Luego, una vez ingresado, podrás
            comprar libremente.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Qué pasa si no valido mi correo?</Accordion.Header>
          <Accordion.Body>
            Si no valida su perfil, no podrá acceder a la página cuando intente
            ingresar a la misma.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>¿Cómo registrarse?</Accordion.Header>
          <Accordion.Body>
            Podrás registrarte de 2 formas, la primera, llenando un formulario
            con tus datos, la segunda es a través de la autenticación de Google,
            la cual te permitirá acceder a diversas partes del sitio web, pero
            te pedirá un formulario con tus datos personales antes de realizar
            cualquier compra.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            ¿Puedo publicar mi propio local en la plataforma?
          </Accordion.Header>
          <Accordion.Body>
            Claro, una vez registrado, tendrás la opción de poder publicar tu
            restaurante con sus productos correspondientes, este proceso lleva 2
            pasos, un formulario para crear tu restaurante y otro para tus
            productos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            ¿Puedo eliminar mis publicaciones?
          </Accordion.Header>
          <Accordion.Body>
            Siendo usuario, usted va a tener la posibilidad de ver el estado de
            su perfil y podrá eliminar sus restaurantes publicados.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Support;
