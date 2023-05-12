import React from "react";
import style from "./Landing.module.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "../../components/Nav/Nav";

function Landing() {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();

  return (
    <div className={style.container}>
      {(isAuthenticated || location.state?.fromLogin) && (
        <>
          <Nav />
          <div>
            <h1>SML VIEWS</h1>
            <Link to="/employees" className={style.linksRoutes}>
              Employees
            </Link>
            <Link to="/analytics" className={style.linksRoutes}>
              Analytics
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Landing;

