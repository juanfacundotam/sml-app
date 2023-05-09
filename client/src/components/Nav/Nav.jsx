import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import {
  IoLogOut,
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
          <img
            className={style.img}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFADjIwjVTPKIf_2YkWdv2-N5TPzIItNC0TQ&usqp=CAU"
            }
          ></img>
          <div className={style.text}>
            <p>Easin Arafat</p>
            <p>Free Account</p>
          </div>
          <div className={style.logout}>
            <IoLogOut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
