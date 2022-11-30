import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import NavLinks from "./NavLinks";

import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          {NavLinks.map((val, key) => {
            return (
              <p>
                <Link
                  activeClass="active"
                  to={val.link}
                  spy={true}
                  // smooth={true}
                  offset={-20}
                  duration={500}
                >
                  {val.title}
                </Link>
              </p>
            );
          })}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              {NavLinks.map((val, key) => {
                return (
                  <p>
                    <Link
                      activeClass="active"
                      to={val.link}
                      spy={true}
                      // smooth={true}
                      offset={0}
                      duration={500}
                    >
                      {val.title}
                    </Link>
                  </p>
                );
              })}
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
