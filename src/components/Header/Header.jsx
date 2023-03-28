import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { transition1 } from "../../transitions";
import "./header.css";

const Header = () => {
  return (
    <m.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="header__container"
    >
      <div className="header__content">
        <div className="header__content__text">
          <m.h1
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-50%" }}
            transition={transition1}
          >
            Kaori Fuji Sushi Bar
          </m.h1>
          <m.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "50%" }}
            transition={transition1}
          >
            <p>
              Ven y compañanos para que puedes disfrutar junto a nuesotros lo
              mejor de la gatronomia japonesa.
              <br />
              Sera un placer para nosotros hacer de tu experiencia un recuerno
              inolvidable.
            </p>
          </m.div>
        </div>
        <Link to={"/contact"}>
          <button className="buttons">Contact us</button>
        </Link>
      </div>
    </m.header>
  );
};

export default Header;
