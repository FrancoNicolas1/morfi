import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import {
  Container,
  ContainerAuthorInfo,
  LineDetail,
  List,
  Title,
} from './footer.styled';

export const Footer = () => {
  return (
    <Container>
      <Title>Landify</Title>
      <List>
        <li>About</li>
        <li>Feacture</li>
        <li>Pricing</li>
        <li>Careers</li>
        <li>Help</li>
        <li>Privacy Policy</li>
      </List>
      <LineDetail />
      <ContainerAuthorInfo>
        <p>© 2023 Landify UI Kit. All rights reserved</p>
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
