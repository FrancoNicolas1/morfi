import Accordion from "react-bootstrap/Accordion";
import Navbar from "../Navbar";
import "./Support.css"

function Support() {
  return (
    <>
     <div className="conteiner">
        <Navbar/>
        <Accordion
     
     >
       <Accordion.Item eventKey="0">
         <Accordion.Header>
           ¿Qué es Morfi?
         </Accordion.Header>
         <Accordion.Body >
           Morfi us una plataforma en donde vas a poder comprar comida desde la comodida de tu hogar
         </Accordion.Body>
       </Accordion.Item>
       
       <Accordion.Item eventKey="1">
         <Accordion.Header>
           ¿Cómo se puede comprar en la pagina ?
         </Accordion.Header>
         <Accordion.Body >
           Deberas ser usuario, a travez de nuestro formulario deberas completar tus datos para hacer compras en la pagina y validar su mail 
         </Accordion.Body>
       </Accordion.Item>
      
       <Accordion.Item eventKey="2">
         <Accordion.Header >
           ¿Que pasa si no valido mi correo?
         </Accordion.Header>
         <Accordion.Body >
           Si no valida su perfil, no podra acceder a la pagina cuando se quiera logear
         </Accordion.Body>
       </Accordion.Item>
       <Accordion.Item eventKey="3">
         <Accordion.Header >
           ¿Cómo registrarse?
         </Accordion.Header>
         <Accordion.Body >
           Podras registrarte de 2 formas, una es llenando un formulario con tus datos, la segunda es atravez de la autenticacion de google
         </Accordion.Body>
       </Accordion.Item>
       <Accordion.Item eventKey="4">
         <Accordion.Header >¿Puedo publicar mi propio local en la plataforma?</Accordion.Header>
         <Accordion.Body >
           Claro, una vez siendo usuario, tendras la opcion de poder publicar tu restaurante con sus productos correspondientes, este proceso lleva 2 pasos, un formulario para crear tu restaurante y otro para tus productos
         </Accordion.Body>
       </Accordion.Item>
       <Accordion.Item eventKey="5">
         <Accordion.Header >¿Puedo eliminar mis publicaciones?</Accordion.Header>
         <Accordion.Body >
           Siendo usuario, va a tener la posibilidad de ver el estado de su perfil y podra eliminar sus restaurantes publicados
         </Accordion.Body>
       </Accordion.Item>
     </Accordion>
         </div> 
    </>
  );
}

export default Support;
