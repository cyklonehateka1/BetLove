import "../styles/pages/register.css";
import { Link } from "react-router-dom";
import { PiEyeSlash, PiEyeLight } from "react-icons/pi";
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
                <input
                  type="text"
                  name="firstName"
                  id="firstname"
                  placeholder="firstName"
                  required
                />
              </div>
              <div className="middleName">
                <label htmlFor="middleName">Middle Name(s)</label>
                <input
                  type="text"
                  name="middleName"
                  id="middlename"
                  placeholder="middleName"
                  required
                />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastname"
                  placeholder="lastName"
                  required
                />
              </div>
              <div className="dob">
                <label htmlFor="dob"> Date of Birth</label>
                <input type="date" name="dob" id="dob" required />
              </div>
            </div>
          </div>
          <div className="bottom">
            <h2>
              win with
              <br /> love
            </h2>
          </div>
        </div>
        <div className="right">
          <div className="top">
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
                    <p>
                      <PiEyeSlash />
                    </p>
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

                <button>Sign Up</button>
                <p>{""}</p>
              </div>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom">
            <h3>Partners </h3>
            <div className="vertLine"></div>
            <div className="imgCont">
              <img src="https://i.ibb.co/QpndRpf/club-logo.png" alt="" />
            </div>
            <div className="imgCont">
              <img src="https://i.ibb.co/WyRSJWv/logo2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
