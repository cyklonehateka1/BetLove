import "../styles/components/rightBetslip.css";
const RightBetslip = () => {
  return (
    <div className="rightBetSlip">
      <div className="rightBetslipCont">
        <h4>Betslip</h4>
        <div className="divCont">
          <div className="singleCombo">
            <div className="buttons">
              <button className="single">Single</button>
              <button className="multiple">Multiple</button>
            </div>
          </div>
          <div className="selectedBets"></div>
        </div>
      </div>
    </div>
  );
};

export default RightBetslip;
