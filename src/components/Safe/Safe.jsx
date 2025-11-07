import Container from "../Container/Container";
import "./Safe.css";

const Safe = () => {
  return (
    <section className="safe">
      <Container>
        <h3 className="safe__title">
          LiqX on <span className="safe__title-span">Rust</span>
        </h3>
        <p className="safe__desctiption">
          Rust ensures memory safety, high speed, and zero bugs. Dedicated
          developers prioritize your security. Download LiqX Messenger for all
          your confidential conversations.
        </p>
      </Container>
    </section>
  );
};

export default Safe;
