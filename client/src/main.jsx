import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

//import '@tremor/react/dist/esm/tremor.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className=" bg-red-600">
      <App />
    </div>
  </BrowserRouter>
);
