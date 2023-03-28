import { useState } from "react";
import { motion as m } from "framer-motion";
import { transition1 } from "../../transitions";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./popular.css";
import { PopularData } from "../../data/popularData";

const Popular = () => {
  const [select, setSelect] = useState(0);
  const pLength = PopularData.length;

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="popular__container"
    >
      <m.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
      >
        <h2>Los favoritos de la casa</h2>
      </m.div>
      <div className="popular__content">
        <m.div
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-50%" }}
          transition={transition1}
          className="popular__content__image"
        >
          <img src={PopularData[select].image} alt="popular_food" />
        </m.div>
        <m.div
          initial={{ opacity: 0, x: "50%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "50%" }}
          transition={transition1}
          className="popular__content__text"
        >
          <p>{PopularData[select].text}</p>
        </m.div>
      </div>
      <div className="popular__content__arrows">
        <IoIosArrowBack
          onClick={() => {
            select === 0
              ? setSelect(pLength - 1)
              : setSelect((prev) => prev - 1);
          }}
        />
        <IoIosArrowForward
          onClick={() => {
            select === pLength - 1
              ? setSelect(0)
              : setSelect((prev) => prev + 1);
          }}
        />
      </div>
    </m.section>
  );
};

export default Popular;
