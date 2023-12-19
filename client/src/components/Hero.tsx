import "../styles/components/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroCont">
        <div className="sliderCont">
          <div className="left">
            <div className="sliderTrack">
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
            <div className="text">
              <h1>SIGN UP AND GET</h1>
              <h2>100% Welcome bonus</h2>
            </div>
            <button>SIGN UP</button>
          </div>
          <div className="right">
            <img src="./photos/BELLINGHAM.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
