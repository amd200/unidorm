import React from "react";
import { NavLink } from "react-router-dom";

export function PrimaryBtn({ title, to }) {
  return (
    <NavLink
      to={to}
      className="btn btn-primary text-white me-3 text-decoration-none"
    >
      {title}
    </NavLink>
  );
}
export function SecondaryBtn({ title,to }) {
  return (
    <NavLink
    to={to}
    className="btn btn-orange text-white me-3 text-decoration-none"
    >
      {title}
    </NavLink>
  );
}
