import Container from "../Container/Container";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <h3 className="about__title">
          {" "}
          <span className="about__title-span">LiqX: </span>Secure Your Data.
        </h3>
        <p className="about__desctiption">
          SSE encryption on our transparent, open source platform using MongoDB.
          No third parties ever access your data. Download LiqX and control your
          privacy!
        </p>
      </Container>
    </section>
  );
};

export default About;
