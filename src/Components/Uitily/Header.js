import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";
import { PrimaryBtn, SecondaryBtn } from "../Ui/Buttons";
function Header() {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const logOut = () => {
    localStorage.removeItem("user");
    setUser("");
  };
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-6">
            <NavLink to="/" className="logo">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="col-lg-4 d-lg-flex d-none">
            <ul className="navbar-nav flex-lg-row flex-column">
              <li className="nav-item me-5">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink to="/properties" className="nav-link">
                  Properties
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-6">
            <div className="btns d-lg-flex justify-content-end d-none">
              {user ? (
                <>
                  <SecondaryBtn to={"/properties"} title="list a property" />
                  <PrimaryBtn customClass={"ms-3"}  to={"/"} onClick={logOut} title="logout" />
                </>
              ) : (
                <>
                  <SecondaryBtn to={"/signup"} title="list a property" />
                  <PrimaryBtn
                    to={"/login"}
                    customClass={"ms-3"}
                    title="Sign In"
                  />
                </>
              )}
            </div>
            <div
              className="bars d-lg-none d-flex align-items-center justify-content-center flex-column ms-auto"
              id="bars"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
