import "../styles/components/liveMatch.css";
const LiveMatch = () => {
  return (
    <div className="liveMatchComponent">
      <div className="lmcCont">
        <button>Live</button>
        <div className="teams">
          <div className="left">
            <img src="./photos/chelsea.png" alt="" />
          </div>
          <h4>vs</h4>
          <div className="right">
            <img src="./photos/manUnited.png" alt="" />
          </div>
        </div>
        <h5>2nd Half 57'</h5>
        <div className="progressBar">
          <div className="progress"></div>
          <div className="unshaded"></div>
        </div>
        <p>Football/English Premier League</p>
        <div className="nameScores">
          <div className="top">
            <p>Chelsea</p>
            <span>3</span>
          </div>
          <div className="bottom">
            <p>Manchester United</p>
            <span>1</span>
          </div>
        </div>
        <div className="odds">
          <div className="homeOdd">
            <span>1</span>
            <p>2.74</p>
          </div>
          <div className="draw">
            <span>X</span>
            <p>2.3</p>
          </div>
          <div className="awayOdd">
            <span>2</span>
            <p>2.34</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatch;
