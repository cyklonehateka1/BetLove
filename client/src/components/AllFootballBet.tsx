import "../styles/components/allFootbalComp.css";
import { IoMdStats } from "react-icons/io";
const AllFootball = () => {
  return (
    <div className="allFootballComp">
      <div className="aFCCont">
        <div className="betsBar">
          <div className="left">
            <span>Date</span>
            <span>Stats</span>
          </div>
          <div className="center">
            <span>1</span>
            <span>x</span>
            <span>2</span>
          </div>

          <span>Market</span>
        </div>

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
              <div className="h5">Chelsea</div>
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
              <div className="h5">Chelsea</div>
              <div className="imgCont">
                <img src="./photos/chelsea.png" alt="" />
              </div>
            </div>
            <button>+190</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFootball;
