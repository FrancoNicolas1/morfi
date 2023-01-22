import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {
  Container,
  ContainerAuthorInfo,
  LineDetail,
  List,
  Title,
} from "./footer.styled";

export const Footer = () => {
  return (
    <Container>
      <Title>
        <h1>Morfy</h1>
      </Title>
      <List>
        <li>Sobre</li>
        <li>Fijación de Precios</li>
        <li>Ayuda</li>
        <li>Politicas de Privacidad</li>
      </List>
      <LineDetail />
      <ContainerAuthorInfo>
        <p>© 2023 Morfy UI Kit. Todos los derechos reservados.</p>
        <div className="container-social-media">
          <div className="container-social">
            <FaInstagram fontSize={18} />
          </div>
          <div className="container-social">
            <FaFacebookSquare fontSize={18} />
          </div>
          <div className="container-social">
            <FaTwitter fontSize={18} />
          </div>

          <div className="container-social">
            <FaYoutube fontSize={18} />
          </div>
        </div>
      </ContainerAuthorInfo>
    </Container>
  );
};
