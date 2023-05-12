import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../views/Logout/Logout";
import Profile from "../../views/Login/Profile";
import style from "./Nav.module.css";

import { IoStatsChart, IoSettingsSharp, IoGrid } from "react-icons/io5";

function Nav() {
  return (
    <div className="bg-[#39394b] flex h-screen">
      <div className="flex flex-col justify-between items-center mt-2">
        <div className="flex flex-col items-center justify-center gap-2 mt-5">
          <div className="flex flex-col items-center justify-center">
            <Link to="/home">
              <span>ICONO</span>
            </Link>
            <h1 className=" text-2xl">SML</h1>
          </div>
          <div/>
          <div className="flex w-full ml-10">
            <ul className="flex flex-col gap-2">
              
              <li className="flex gap-2 items-center">
                <span className=" text-lg">
                  <IoStatsChart />
                </span>
                <span>
                  <Link to="/analytics" className=" hover:text-gray-200">
                    Analytics
                  </Link>
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <span className=" text-lg">
                  <IoSettingsSharp />
                </span>
                <span>
                  <Link to="/settings" className=" hover:text-gray-200">
                    Settings
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.log}>
          <Profile />
          <div />
          <div className={style.logout}>
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { IoLogOut, IoStatsChart, IoSettingsSharp, IoGrid } from 'react-icons/io5';

// function Nav() {
// 	return (
// 		<div className="bg-gray-800 flex min-w-15rem h-screen">
// 			<div className="flex flex-col justify-between items-center mt-0.5rem w-full">
// 				<div className="flex flex-col items-center justify-center gap-1rem mt-1rem w-full">
// 					<div className="flex flex-col items-center justify-center">
// 						<Link to="/">
// 							<span className="text-gray-200">ICONO</span>
// 						</Link>
// 						<h1 className="text-white">SML</h1>
// 					</div>
// 					<div />
// 					<div className="flex w-full ml-3rem md:ml-0.5rem">
// 						<ul className="flex flex-col gap-1rem">
// 							<li className="flex items-center gap-1rem">
// 								<span className="text-gray-300">
// 									<IoGrid />
// 								</span>
// 								<Link to="/dashboard" className="text-white">
// 									Dashboard
// 								</Link>
// 							</li>
// 							<li className="flex items-center gap-1rem">
// 								<span className="text-gray-300">
// 									<IoStatsChart />
// 								</span>
// 								<Link to="/analytics" className="text-white">
// 									Analytics
// 								</Link>
// 							</li>
// 							<li className="flex items-center gap-1rem">
// 								<span className="text-gray-300">
// 									<IoSettingsSharp />
// 								</span>
// 								<Link to="/settings" className="text-white">
// 									Settings
// 								</Link>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>

// 				<div className="flex justify-center items-center gap-0.5rem ml-1rem mb-3rem md:flex-col">
// 					<img
// 						className="w-3rem h-3rem rounded-full"
// 						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFADjIwjVTPKIf_2YkWdv2-N5TPzIItNC0TQ&usqp=CAU"
// 						alt="avatar"
// 					/>
// 					<div className="text-white text-sm">
// 						<p>Easin Arafat</p>
// 						<p>Free Account</p>
// 					</div>
// 					<div className="text-white text-xl ml-0.5rem">
// 						<IoLogOut />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Nav;
