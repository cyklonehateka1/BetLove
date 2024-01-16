import "../styles/pages/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState({
    emailInputError: "",
    passwordInputError: "",
  });
  const [resError, setResError] = useState("");
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handlePasswordVisibility = () => {
    if (viewPassword) {
      setViewPassword(false);
    } else {
      setViewPassword(true);
    }
  };

  const navigate = useNavigate();

  const { username, password } = input;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.trim() === "") {
      setError({ ...error, emailInputError: "emailInputError" });
      return;
    } else if (password.trim() === "") {
      setError({ ...error, passwordInputError: "passwordInputError" });
      return;
    }
  };

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="loginCont">
        <div className="imgCont">
          <img src="https://i.ibb.co/nMD7gp1/Bet-Love-Logo.png" alt="" />
        </div>
        <h3>For the love of the game</h3>
        <p>Welcome back, please login to your account</p>
        <form action="" onSubmit={handleSubmit}>
          <div className="email">
            {/* The field itself accepts an email but FastAPI Oauth2 requires the field to be named username  */}
            <label htmlFor="username">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              id="username"
              name="username"
              className={error.emailInputError}
              required
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <div className={error.passwordInputError}>
              <input
                type={viewPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Your Password"
                required
                onChange={handleChange}
              />
              <p onClick={handlePasswordVisibility}>
                {viewPassword ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>
          </div>
          <div className="rememberForgot">
            <div className="remember">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/">Forgot password?</Link>
          </div>
          <div className="buttons">
            <button className="loginButton">Login</button>
            <button className="signUpButton" onClick={(e) => handleNavigate(e)}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
