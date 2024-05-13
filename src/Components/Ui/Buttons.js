import React from "react";
import { NavLink } from "react-router-dom";

export function PrimaryBtn({ title, to,customClass,icon }) {
  return (
    <NavLink
      to={to}
      className={`btn btn-primary2 text-white d-flex align-items-center justify-content-center  text-decoration-none ${customClass ? customClass : ''}`}
    >
      {title}
      {icon}
      

    </NavLink>
  );
}
export function SecondaryBtn({ title,to ,customClass}) {
  return (
    <NavLink
    to={to}
    className={`btn btn-orange text-white  text-decoration-none ${customClass ? customClass : ''}`}
    >
      {title}
    </NavLink>
  );
}
