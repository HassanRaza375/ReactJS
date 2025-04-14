import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
  Navigate,
} from "react-router-dom";
import SignUp from "./components/lms/auth/SignUp";
import Login from "./components/lms/auth/Login";
import "./index.css";
function App2() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/SignUp" />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App2;
