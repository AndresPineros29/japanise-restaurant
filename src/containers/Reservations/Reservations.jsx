import { useState } from "react";
import { motion as m } from "framer-motion";
import { transition1 } from "../../transitions";
import Calendar from "react-calendar";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import "./reservation.css";
import "./calendar.css";

const Reservations = () => {
  const [number, setNumber] = useState(1);
  const [message, setMessage] = useState(false);
  const [date, setDate] = useState(new Date());

  if (message) {
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  }

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="reservations__container"
    >
      <m.h2
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
        className="reservations__title"
      >
        Has tu reservación
      </m.h2>
      <div className="reservations__content">
        <m.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={transition1}
          className="reservations___info info__1"
        >
          <div>
            <h3>Numero de personas</h3>
          </div>
          <div>
            <AiOutlineLine
              onClick={() => (number === 1 ? null : setNumber(number - 1))}
            />
            {number}
            <AiOutlinePlus
              onClick={() => (number === 10 ? null : setNumber(number + 1))}
            />
          </div>
          {number === 10 ? "Maximo 10 peronas" : null}
        </m.div>
        <m.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={transition1}
          className="reservations___info info__2"
        >
          <h3>Fecha</h3>
          <div className="container__calendar">
            <Calendar onChange={setDate} value={date} />
          </div>
          <div className="calendar__text">
            Selected Date: {date.toDateString()}
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={transition1}
          className="reservations___info  info__3"
        >
          <h3>Hora</h3>
          <div>
            <input type="time" />
          </div>
        </m.div>
      </div>
      <div>
        <button onClick={() => setMessage(true)} className="buttons">
          Reservar
        </button>
      </div>
      {message ? "Tu reservacion ha sido exitosa" : null}
    </m.section>
  );
};

export default Reservations;
