import React from "react";
import { sidenavData } from "./SidenavData";
import "../Sidenav/Sidenav.scss";

function Sidenav() {
  return (
    <div className="sidenav">
      <ul className="sidenavUL">
        {sidenavData.map((val, key) => {
          return (
            <li className="sidenavList">
              <div className="icon">{val.icon}</div>
              <div className="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidenav;
