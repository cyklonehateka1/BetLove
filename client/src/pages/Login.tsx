import "../styles/pages/login.css";
import { PiEyeSlash, PiEyeLight } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);

  const handlePasswordVisibility = () => {
    if (viewPassword) {
      setViewPassword(false);
    } else {
      setViewPassword(true);
    }
  };

  return (
    <div className="login">
      <div className="loginCont">
        <div className="imgCont">
          <img src="https://i.ibb.co/nMD7gp1/Bet-Love-Logo.png" alt="" />
        </div>
        <div className="detailsCont">
          <h2>login</h2>

          <form action="">
            <div className="email">
              {/* the name is username because FastAPI Oauth two require username and password but actual input is email*/}
              <input
                type="email"
                name="username"
                required
                placeholder="email"
              />
            </div>
            <div className="password">
              <Link to="/">forgot password?</Link>
              <div>
                <input
                  type={viewPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="password"
                />
                <p onClick={handlePasswordVisibility}>
                  {viewPassword ? <PiEyeSlash /> : <PiEyeLight />}
                </p>
              </div>
            </div>
            <div className="remember">
              <input type="checkbox" name="remember" id="remember" />{" "}
              <label htmlFor="">Remember me</label>
            </div>
            <button>login</button>

            <p>
              don't have an account yet? <Link to="/register">sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
