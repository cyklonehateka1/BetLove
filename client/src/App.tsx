import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AwaitConfirmEmail from "./pages/AwaitConfirmEmail";
import ConfirmAccount from "./pages/ConfirmAccount";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth/emailsent" element={<AwaitConfirmEmail />} />
          <Route
            path="/auth/confirmAccount/:user_id/:token"
            element={<ConfirmAccount />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
