import { Link } from "react-router-dom";
import "../styles/components/navbar.css";
import { Badge } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navCont">
        <div className="navLogo">
          <img src="https://i.ibb.co/nMD7gp1/Bet-Love-Logo.png" alt="logo" />
        </div>
        <div className="center">
          <ul>
            <li>
              <Link to="/sport">Sports</Link>
            </li>
            <li>
              <Link to="/live">Live</Link>
            </li>
            <li>
              <Link to="/aviator">Aviator</Link>
            </li>
            <li>
              <Link to="/promotions">Promotions</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="balance">
            <p>GHS 39.25</p>
          </div>
          <div className="openBets">
            <Badge badgeContent={4} color="primary">
              Open Bets
            </Badge>
          </div>
          <div className="account">
            <div className="imgCont">
              <img
                src="https://i.ibb.co/dGcxdHw/intern-img-jg.png"
                alt="profile"
              />
            </div>
            {/* <div className="textCont">
                <p>Cyklone Hateka</p>
                <span>actions</span>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
