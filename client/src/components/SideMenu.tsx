import { Link } from "react-router-dom";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import {
  FaFootballBall,
  FaBasketballBall,
  FaVolleyballBall,
  FaHome,
  FaStar,
  FaDiceThree,
} from "react-icons/fa";
import { GiHockey, GiBoxingGloveSurprise } from "react-icons/gi";
import "../styles/components/sideMenu.css";

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <div className="sideMenuCont">
        <div className="sideNav">
          <ul>
            <li>
              <div className="menuCont">
                <Link to="/">
                  <FaHome />
                </Link>
              </div>
            </li>
            <li>
              <div className="menuCont">
                <Link to="/">
                  <FaStar />
                </Link>
              </div>
            </li>
            <li>
              <div className="menuCont">
                <Link to="/">
                  <FaDiceThree />
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="sideSports">
          <ul>
            <li>
              <div className="menuCont">
                <Link to="/">
                  <BiFootball />
                </Link>
              </div>
            </li>
            <li>
              <div className="menuCont">
                <Link to="/">
                  <FaFootballBall />
                </Link>
              </div>
            </li>
            <li>
              <div className="menuCont">
                <Link to="/">
                  <BiTennisBall />
                </Link>
              </div>
            </li>
            <li>
              <div className="menuCont">
                <Link to="/">
                  <FaBasketballBall />
                </Link>
              </div>
            </li>
            <li>
              <div className="menuCont">
                <Link to="/">
                  <GiHockey />
                </Link>
              </div>
            </li>
            <li>
              <div className="menuCont">
                <Link to="/">
                  <FaVolleyballBall />
                </Link>
              </div>
            </li>
            <li>
              <div className="menuCont">
                <Link to="/">
                  <GiBoxingGloveSurprise />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
