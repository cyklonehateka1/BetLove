import "../styles/pages/register.css";
import { backendConnection } from "../utils/axiosInstance";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PiEyeSlash, PiEyeLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [error, setError] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  // const [done, setDone] = useState(false);
  const [inputValue, setInputValue] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    setError("");
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handlePasswordVisibility = () => {
    if (viewPassword) {
      setViewPassword(false);
    } else {
      setViewPassword(true);
    }
  };

  const {
    firstName,
    middleName,
    lastName,
    email,
    password,
    dob,
    phone_number,
  } = inputValue;

  const registerCredentials = {
    name: firstName + " " + middleName + " " + lastName,
    email,
    password,
    phone_number,
    dob,
  };
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await backendConnection.post("/auth/signup", registerCredentials);
      navigate("/auth/emailsent");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      dob.trim() === "" ||
      phone_number.trim() === ""
    ) {
      setError("All fields are required");
      return;
    }
    if (password.length < 6) {
      setError("Password too short");
      return;
    }

    signup();
  };

  const handleCheck = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div className="dob">
                <label htmlFor="dob"> Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  required
                  onChange={handleChange}
                />
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
                    onChange={handleChange}
                  />
                </div>

                <div className="password">
                  <label htmlFor="password">Password</label>
                  <div className="inputCont">
                    <input
                      type={viewPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      required
                      onChange={handleChange}
                    />
                    <p onClick={handlePasswordVisibility}>
                      {viewPassword ? <PiEyeSlash /> : <PiEyeLight />}
                    </p>
                  </div>
                </div>

                <div className="phone">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone_number"
                    id="phone"
                    placeholder="Phone Number"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="terms">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheck}
                  />
                  <p>
                    By signing up, you agree to our{" "}
                    <Link to="/">terms and conditions</Link>
                  </p>
                </div>

                <button
                  onClick={handleSubmit}
                  // disabled={done}
                  // style={{ cursor: "not-allowed" }}
                >
                  Sign Up
                </button>
                <p>{error}</p>
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
