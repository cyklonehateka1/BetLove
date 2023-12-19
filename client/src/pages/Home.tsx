import AllFootball from "../components/AllFootballBet";
import Hero from "../components/Hero";
import Label from "../components/Label";
import Leagues from "../components/Leagues";
import LiveMatch from "../components/LiveMatch";
import LiveTrendingMatch from "../components/LiveTrendingMatch";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import "../styles/pages/home.css";

const Home = () => {
  return (
    <div className="home">
      <SideMenu />
      <div className="homeCont">
        <Navbar />
        <div className="homeContent">
          <div className="left">
            <LiveTrendingMatch />
            <Leagues />
          </div>
          <div className="center">
            <Hero />
            <Label />
            <div className="liveMatchesParent">
              <div className="left">
                <LiveMatch />
              </div>
              <div className="center">
                <LiveMatch />
              </div>
              <div className="right">
                <LiveMatch />
              </div>
            </div>
            <Label />
            <AllFootball />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
