import "../styles/components/allFootbalComp.css";
import BetRow from "./BetRow";
const AllFootball = () => {
  return (
    <div className="allFootballComp">
      <div className="aFCCont">
        <div className="betsBar">
          <div className="left">
            <span>Date</span>
            <p>Stats</p>
          </div>
          <div className="center">
            <span>1</span>
            <span>x</span>
            <span>2</span>
          </div>

          <div className="right">
            <span>Market</span>
          </div>
        </div>
        <BetRow />
        <BetRow />
        <BetRow />
      </div>
    </div>
  );
};

export default AllFootball;
