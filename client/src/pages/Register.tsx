import "../styles/pages/register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="registerCont">
        <div className="left">
          <div className="top">
            <div className="logoCont">
              <img src="https://i.ibb.co/nMD7gp1/Bet-Love-Logo.png" alt="" />
            </div>
            <h3>
              why lose with hate,
              <br /> when you can win with love
            </h3>
            <h2>Sign Up</h2>
            <div className="form1">
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" />
              </div>
              <div className="middleName">
                <label htmlFor="middleName">Middle Name(s)</label>
                <input type="text" name="middleName" />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" />
              </div>
              <div className="dob">
                <label htmlFor="dob"> Date of Birth</label>
                <input type="date" name="dob" id="dob" />
              </div>
            </div>
          </div>
          <div className="bottom">
            <h2>win with love</h2>
          </div>
        </div>
        <div className="right">
          <div className="left">
            <h3>be a winner</h3>

            <div className="form2">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@mail.com"
                  required
                />
              </div>

              <div className="password">
                <label htmlFor="password">Password</label>
                <div className="inputCont">
                  <input
                    type={"password"}
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    required
                  />
                </div>
              </div>

              <div className="phone">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div className="terms">
                <input type="checkbox" />
                <p>
                  By signing up, you agree to our{" "}
                  <Link to="/">terms and conditions</Link>
                </p>
              </div>

              <p>{"Something went wrong"}</p>
              <button>Sign Up</button>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
