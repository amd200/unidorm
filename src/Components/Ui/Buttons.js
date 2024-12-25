import React from "react";
import { NavLink } from "react-router-dom";

export function PrimaryBtn({ title, to, customClass, icon, onClick,disabled }) {
  return (
    <NavLink disabled={disabled} to={to} onClick={onClick} className={`btn btn-primary2 text-white d-inline-flex align-items-center justify-content-center  text-decoration-none ${customClass ? customClass : ""}`}>
      {title}
      {icon}
    </NavLink>
  );
}
export function SecondaryBtn({ title, to, customClass, onClick ,disabled }) {
  return (
    <NavLink disabled={disabled} onClick={onClick} to={to} className={`btn btn-orange text-white  text-decoration-none ${customClass ? customClass : ""}`}>
      {title}
    </NavLink>
  );
}

export function DangerBtn({ title, to, customClass, onClick }) {
  return (
    <NavLink onClick={onClick} to={to} className={`btn btn-danger   text-decoration-none ${customClass ? customClass : ""}`}>
      {title}
    </NavLink>
  );
}
