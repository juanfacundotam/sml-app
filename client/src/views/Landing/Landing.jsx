import React from "react";
import style from "./Landing.module.css";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Nav from "../../components/Nav/Nav";
import objeto from "./test";

function Landing() {
  function Hello() {
    const { isSignedIn, user } = useUser();
    if(!isSignedIn) {
      return null;
    }
    return <div>Hello, {user.firstName}</div>
  }
  console.log(Hello());
 
  return (
    <div className={style.container}>
      <>
        <Nav />

        <div className="flex flex-col gap-5">
          <h1>Bienvenido {/* aqui el nombre del usuario */} </h1>
          <Link to="/employees" className={style.linksRoutes}>
            Lider-Dashboard
          </Link>
          <Link to="/employees/analytics" className={style.linksRoutes}>
            Lider-Analytics
          </Link>
          <Link to="/corredores" className={style.linksRoutes}>
            Corredores-Dashbord
          </Link>
          <Link to="/corredores/analytics" className={style.linksRoutes}>
            Corredores-Analytics
          </Link>
          <Link to="/analytics" className={style.linksRoutes}>
            Analytics
          </Link>
          <Link to="/vendedores" className={style.linksRoutes}>
            VendedoresDashboard
          </Link>
          <Link to="/vendedores/analytics" className={style.linksRoutes}>
            VendedoresAnalytics
          </Link>
        </div>

        <div>
          <h1>Bienvenido {/* aqui nombre del usuario*/} </h1>
          <Link to="/corredores" className={style.linksRoutes}>
            Corredores-Dashbord
          </Link>
          <Link to="/corredores/analytics" className={style.linksRoutes}>
            Corredores-Analytics
          </Link>
          <Link to="/corredores" className={style.linksRoutes}>
            Corredores-Dashbord
          </Link>
          <Link to="/corredores/analytics" className={style.linksRoutes}>
            Corredores-Analytics
          </Link>
        </div>
      </>
    </div>
  );
}

export default Landing;
