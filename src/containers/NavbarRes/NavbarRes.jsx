import "./nabvarres.css";
import { Link } from "react-router-dom";
import {
  IoIosHome,
  IoIosBook,
  IoIosMail,
  IoIosInformationCircle,
} from "react-icons/io";

const NavbarRes = () => {
  return (
    <div className="navbar__res__container">
      <Link to={"/"}>
        <IoIosHome />
      </Link>
      <Link to={"/aboutus"}>
        <IoIosInformationCircle />
      </Link>
      <Link to={"/reservations"}>
        <IoIosBook />
      </Link>
      <Link to={"/contact"}>
        <IoIosMail />
      </Link>
    </div>
  );
};

export default NavbarRes;
