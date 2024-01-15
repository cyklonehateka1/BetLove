import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AwaitConfirmEmail from "./pages/AwaitConfirmEmail";
import ConfirmAccount from "./pages/ConfirmAccount";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth/emailsent" element={<AwaitConfirmEmail />} />
          <Route
            path="/auth/confirmaccount/:user_id/:token"
            element={<ConfirmAccount />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
