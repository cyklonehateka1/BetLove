import { BiDotsHorizontalRounded } from "react-icons/bi";
import { top5leagues } from "../utils/data";
import "../styles/components/leagues.css";
const Leagues = () => {
  return (
    <div className="leaguesComponent">
      <div className="lCCont">
        <div className="textOptionsCont">
          <h5>Top 5 Leagues</h5>
          <span>
            <BiDotsHorizontalRounded />
          </span>
        </div>
        <div className="leaguesContent">
          {top5leagues.map((item) => {
            return (
              <div className={`league ${item.className}`} key={item.league_id}>
                <div className="imgCont">
                  <img src={`./photos/${item.league_logo}`} alt="" />
                </div>
                <div className="text">
                  <h5>{item.title}</h5>
                  <span>{item.tableLeader}</span>
                </div>
                <span>{item.currentMatches}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leagues;
