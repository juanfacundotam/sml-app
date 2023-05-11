import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import Logout from "../../views/Logout/Logout"
import Profile from "../../views/Login/Profile";

import {
  IoStatsChart,
  IoSettingsSharp,
  IoGrid,
} from "react-icons/io5";

function Nav() {
  return (
    <div className={style.container}>
      <div className={style.containerContent}>
        <div className={style.contentTitle}>
          <div className={style.title}>
            <Link to="/">
              <span>ICONO</span>
            </Link>
            <h1>SML</h1>
          </div>
          <div />
          <div className={style.contentList}>
            <div className={style.list}>
              <ul>
                <li>
                  <span>
                    <IoGrid />
                  </span>
                  <span>Dashboard</span>
                </li>
                <li>
                  <span>
                    <IoStatsChart />
                  </span>
                  <span>Analytics</span>
                </li>
                <li>
                  <span>
                    <IoSettingsSharp />
                  </span>
                  <span>Settings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.log}>
          <Profile />
          <div/>
          <div className={style.logout}>
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
