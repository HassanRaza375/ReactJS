import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import TabularHome from "./pages/TabularHome";
import AuthMiddleware from "./middleware/AuthMiddleware";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
  Navigate,
} from "react-router-dom";
import "./index.css";
const routes = (
  <Router>
    <Routes>
      {/* Public Route */}
      <Route path="/SignUp" element={<SignUp />} />

      {/* Protected Route */}
      <Route
        path="/Home"
        element={
          <AuthMiddleware>
            <Home />
          </AuthMiddleware>
        }
      />
      <Route
        path="/TabularHome"
        element={
          <AuthMiddleware>
            <TabularHome />
          </AuthMiddleware>
        }
      />
      <Route path="*" element={<Navigate to="/SignUp" replace />} />
    </Routes>
  </Router>
);
function App() {
  return <div>{routes}</div>;
}

export default App;
