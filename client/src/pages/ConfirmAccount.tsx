import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import "../styles/pages/confirmEmail.css";
import "../styles/pages/confirmEmailResponsive.css";
import { backendConnection } from "../utils/axiosInstance";
// import confirmEmailReducer from "../utils/reducers/confirmEmailReducer"

const ConfirmAccount = () => {
  const { user_id, token } = useParams();

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const res = await backendConnection.get(
          `auth/confirmaccount/${user_id}/${token}`
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    verifyAccount();
  }, []);
  return (
    <div className="confirmEmailCont">
      <div className="messageBox">
        <div className="imgCont">
          {/* {state.success ? ( */}
          <img
            src="https://images.vexels.com/media/users/3/157893/isolated/preview/d6f4e679138673eb3223362c70ecf7ce-check-mark-tick-icon.png"
            alt=""
          />
          {/* ) : state.err ? ( */}
          {/* <img
              src="https://cdn-icons-png.flaticon.com/512/6659/6659895.png"
              alt=""
            /> */}
          {/* ) : ( */}
          {/* <h5>...Loading</h5>
          )} */}
        </div>
        <p>
          Account verified successfully.. Click on the login
          {/* {state.err
            ? state.err
            : state.isLoading
            ? "...Loading"
            : "Account verified successfully.. Click on the login butto below and let's go shopping at affordable prices"} */}
        </p>
        {/* {!state.err && (
          <button onClick={() => (window.location.href = "/login")}>
            Login
          </button>
        )} */}

        <button onClick={() => (window.location.href = "/login")}>Login</button>
      </div>
    </div>
  );
};

export default ConfirmAccount;
