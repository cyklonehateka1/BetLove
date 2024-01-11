import "../styles/pages/awaitEmail.css";
import "../styles/pages/awaitEmailResponsive.css";

const AwaitConfirmEmail = () => {
  return (
    <div className="awaitEmailConfirm">
      <div className="awaitConfirmCont">
        <div className="top">
          <img
            src="https://i.ibb.co/grtJ3Kf/undraw-Mail-sent-re-0ofv.png"
            alt=""
          />
        </div>
        <div className="bottom">
          <h3>Email Confirmation</h3>
          <p>
            We have sent a confirmation email to example@mail.com follow the
            link provided to complete your registration.
          </p>
          <hr />
          <div>
            <p>
              Didn't get the mail? <span>Resend</span>
            </p>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default AwaitConfirmEmail;
