import { Link } from "react-router-dom";
import Container from "../Container/Container";

import "./LoginForm.css";

const LoginForm = () => {
  return (
    <section className="login">
      <Container>
        <h2 className="login__title">Welcome to LiqX</h2>
        <p className="login__description">Your secure messaging platform.</p>
        <form className="login__form">
          <h4 className="login__form-title">Login</h4>
          <ul className="login__list">
            <li className="login__item">
              <span className="login__text">Username:</span>
              <input
                type="text"
                className="login__input"
                name="username"
                placeholder="Enter username"
              />
            </li>
            <li className="login__item">
              <span className="login__text">Password:</span>
              <input
                type="text"
                className="login__input"
                name="password"
                placeholder="Enter password"
              />
            </li>
          </ul>
          <button className="login__button" type="submit">
            Login
          </button>
          <p className="login__account">
            No account?
            <Link className="login__toreg" to="/register">
              Register
            </Link>
          </p>
        </form>
      </Container>
    </section>
  );
};

export default LoginForm;
