import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Employees from "./views/Employees/Employees.jsx";
import Analytics from "./views/Analytics/Analytics.jsx";
// import CorredoresAnalytics from "./components/Corredores/Analitycs/CorredoresAnalytics";
import Settings from "./views/Settings/Settings.jsx";
import Login from "./views/Login/Login";
import CorredoresDashboard from "./components/Corredores/Dashboard/CorredoresDashboard"
import Corredores from "./components/Corredores/Corredores";
import DashboardVendedores from "./components/Vendedores/Dashboard/DashboardVendedores";
import AnalyticsSealer from "./components/Vendedores/analytics/VendedoresAnalytics";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Landing />} />
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/corredores" element={<CorredoresDashboard />} />
        <Route path="/corredores/analytics" element={<Corredores />}/>
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/vendedores" element={<DashboardVendedores />} />
        <Route path="/analyticsSelers" element={<AnalyticsSealer/>} />
      </Routes>
      <img className="Appimg" src="https://cdn.discordapp.com/attachments/1105243107555037294/1106577865698459788/White_Logo_Social_Media_Lab.png"></img>
    </div>
  );
}

export default App;
