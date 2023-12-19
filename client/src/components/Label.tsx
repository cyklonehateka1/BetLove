import "../styles/components/label.css";
const Label = () => {
  return (
    <div className="label">
      <div className="labelCont">
        <div className="left">
          <h5>Live</h5>
          <span>Matches</span>
        </div>
        <button>All Live</button>
      </div>
    </div>
  );
};

export default Label;
