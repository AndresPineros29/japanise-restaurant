import "./sedes.css";
import { motion as m } from "framer-motion";
import { transition1 } from "../../transitions";
import { FaLocationArrow } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SedesData } from "../../data/sedesData";

const Sedes = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="sedes__container"
    >
      <div className="sedes__content">
        <m.div
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-50%" }}
          transition={transition1}
          className="sedes__content__title"
        >
          <h2>Nuestras Sedes</h2>
        </m.div>
        {SedesData.map((sede) => (
          <div className="sede">
            <hr />
            <div className="sede__image">
              <img src={sede.image} alt="imagen_restaurante" />
            </div>
            <div className="sede__info">
              <ul>
                <li>
                  <FaLocationArrow />
                  {sede.nombre}
                </li>
                <li>
                  <IoLocationSharp />
                  {sede.ubicacion}
                </li>
                <li>
                  <BsFillTelephoneFill />
                  {sede.tel}
                </li>
              </ul>
            </div>

            <hr />
          </div>
        ))}
      </div>
    </m.section>
  );
};

export default Sedes;
