const SelectedBet = () => {
  return (
    <div className="selectedBet">
      <div className="teamsClose">
        <h5>Liverpool VS Levante</h5>
        <span>x</span>
      </div>
      <span>To win</span>
      <div className="teamOdd">
        <span>Levante</span>
        <button>2.4</button>
      </div>
    </div>
  );
};

export default SelectedBet;
