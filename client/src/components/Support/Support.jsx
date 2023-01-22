import Accordion from "react-bootstrap/Accordion";
import Navbar from "../Navbar";

function Support() {
  return (
    <>
      <Navbar />
      <Accordion
        defaultActiveKey="0"
        flush
        style={{ width: "75%", marginLeft: "15%", background: "#D9D9D9" }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ width: "97%" }}>
            ¿Qué es ?
          </Accordion.Header>
          <Accordion.Body style={{ background: "rgba(217, 217, 217, 0.6)" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sed
            error assumenda culpa vel tempora unde deleniti tenetur consectetur
            magnam accusamus excepturi ab blanditiis voluptates, ullam deserunt,
            non, ducimus minima?
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header style={{ width: "97%" }}>
            ¿Cuándo es indicado ?
          </Accordion.Header>
          <Accordion.Body style={{ background: "rgba(217, 217, 217, 0.6)" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            dicta! Cum sunt quasi qui a vero, autem error fugiat enim voluptatem
            voluptatibus labore, temporibus odio expedita necessitatibus
            pariatur asperiores deserunt!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header style={{ width: "97%" }}>
            ¿Qué quiere decir ?
          </Accordion.Header>
          <Accordion.Body style={{ background: "rgba(217, 217, 217, 0.6)" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            nihil non beatae maiores laudantium quidem deleniti asperiores!
            Explicabo placeat quasi rerum officia cum dolores ut hic! Ab debitis
            excepturi itaque.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header style={{ width: "97%" }}>
            ¿Cómo se puede ?
          </Accordion.Header>
          <Accordion.Body style={{ background: "rgba(217, 217, 217, 0.6)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aut
            expedita. Est deserunt ratione animi quia quos alias aspernatur
            labore consequuntur et! Aliquid accusamus fugiat debitis est, harum
            minima incidunt?
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header style={{ width: "97%" }}>¿Qué ?</Accordion.Header>
          <Accordion.Body style={{ background: "rgba(217, 217, 217, 0.6)" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            accusamus deleniti, est magni ad dolore nostrum voluptatem qui eum,
            adipisci nisi, cumque placeat! Qui, unde nam minima harum error
            modi.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header style={{ width: "97%" }}>
            ¿A qué hora?
          </Accordion.Header>
          <Accordion.Body style={{ background: "rgba(217, 217, 217, 0.6)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            id, similique aliquam quasi dolor accusantium dolorum enim
            voluptatibus aperiam non rem tenetur? Delectus adipisci aliquid ex
            nam, officia fugiat impedit?
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header style={{ width: "97%" }}>
            ¿Cómo registrarse?
          </Accordion.Header>
          <Accordion.Body style={{ background: "rgba(217, 217, 217, 0.6)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste
            error reprehenderit suscipit minima enim ex doloremque quas, itaque
            consequatur esse fuga nulla natus recusandae et expedita architecto
            sunt modi?
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header style={{ width: "97%" }}>¿Cómo ?</Accordion.Header>
          <Accordion.Body style={{ background: "rgba(217, 217, 217, 0.6)" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            ratione sint doloremque nulla repellendus nesciunt in fuga
            accusantium, molestias dolorum odit mollitia esse quidem iure velit
            magni facere tempora beatae?
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Support;
