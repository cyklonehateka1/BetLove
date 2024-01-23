import { IoMdStats } from "react-icons/io";
import "../styles/components/betRow.css";
const BetRow = () => {
  return (
    <div className="betRow">
      <div className="left">
        <div className="timeStats">
          <div>
            <span>11:30</span>
            <p>TODAY</p>
          </div>
          <button>
            <IoMdStats />
          </button>
        </div>
        <div className="teamDet">
          <h5>Chelsea</h5>
          <div className="imgCont">
            <img src="./photos/chelsea.png" alt="" />
          </div>
        </div>
      </div>

      <div className="center">
        <button className="homeOdd">1.90</button>
        <button className="draw">3.40</button>
        <button className="awayOdd">3.90</button>
      </div>

      <div className="right">
        <div className="teamDet">
          <div className="imgCont">
            <img src="./photos/chelsea.png" alt="" />
          </div>
          <h5>Chelsea</h5>
        </div>
        <button>+190</button>
      </div>
    </div>
  );
};

export default BetRow;
