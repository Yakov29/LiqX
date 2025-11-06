import Container from "../Container/Container";
import logo from "../../images/logo.png";

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__logo">
          <img className="footer__logo-img" src={logo} alt="" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
