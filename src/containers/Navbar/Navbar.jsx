import React from "react";
import { GiAsianLantern } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./navbar.css";

const Menu = () => {
  return (
    <ul className="menu__contaner">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/aboutus"}>Sobre nosotros</Link>
      </li>
      <li>
        <Link to={"/reservations"}>Reservación</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contacto</Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <div className="navbar__container">
      <Link to={"/"}>
        <GiAsianLantern size={40} color={"#fff"} />
      </Link>
      <div className="navbar__menu">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
