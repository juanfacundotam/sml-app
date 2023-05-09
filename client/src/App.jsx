import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Employees from "./views/Employees/Employees.jsx";
import Analytics from "./views/Analytics/Analytics.jsx";
import Nav from "./components/Nav/Nav";
import Login from "./views/Login/Login";

function App() {
  const location = useLocation();
  return (
    <div>
     
      {location.pathname !== "/" && <Nav/>}
      <Routes>
       
        
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Landing/>} />
        <Route path="/employees" element={<Employees/>} />
        <Route path="/analytics" element={<Analytics/>} />
      </Routes>
    </div>
  );
}

export default App;
