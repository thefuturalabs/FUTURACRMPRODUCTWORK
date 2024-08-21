import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
