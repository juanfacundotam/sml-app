import React from "react";
import style from "./CardEmploy.module.css";
import data from "./data";

function CardEmploy() {
  return (
    <div className={style.divCard}>
      {data.map((char) => {
        return (
          <ul className={style.list}>
            <li className={style.liImage}>
              <img src={char.image} alt="" />
            </li>
            <li className={style.liName}>{char.name}</li>
            <li className={style.liPhone}>{char.phone}</li>
            <li className={style.liPosition}>{char.position}</li>
            <li className={style.liExtra}>{char.extra}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default CardEmploy;
