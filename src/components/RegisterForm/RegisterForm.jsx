import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./RegisterForm.css"

const RegisterForm = () => {
  return (
    <section className="register">
      <Container>
        <h2 className="register__title">Welcome to LiqX</h2>
        <p className="register__description">Your secure messaging platform.</p>
        <form className="register__form">
          <h4 className="register__form-title">Register</h4>
          <ul className="register__list">
            <li className="register__item">
              <span className="register__text">Username:</span>
              <input type="text" className="register__input" name="username" placeholder="Enter new username" />
            </li>
              <li className="register__item">
              <span className="register__text">Password:</span>
              <input type="text" className="register__input" name="password" placeholder="Enter new password" />
            </li>
          </ul>
          <button className="register__button" type="submit">Register</button>
          <p className="register__account">Already have an account?<Link className="register__tologin" to="/login">Login</Link></p>
        </form>
      </Container>
    </section>
  );
};

export default RegisterForm;
