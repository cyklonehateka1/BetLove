import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AwaitConfirmEmail from "./pages/AwaitConfirmEmail";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth/emailsent" element={<AwaitConfirmEmail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
