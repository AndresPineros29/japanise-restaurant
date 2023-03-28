import "./contact.css";
import { motion as m } from "framer-motion";
import { transition1 } from "../../transitions";

const Contact = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="contact__container"
    >
      <m.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
        className="contact__container__title"
      >
        <h2>Contacto</h2>
        <h3>Tu opinión es importante</h3>
      </m.div>
      <div className="contact__content">
        <m.div
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-50%" }}
          transition={transition1}
          className="contact__info"
        >
          <div>
            <h4>Teléfonos</h4>
            <ul>
              <li>+57 320654321</li>
              <li>+57 313123456</li>
            </ul>
          </div>

          <hr />

          <div>
            <h4>Horarios</h4>
            <ul>
              <li>Lunes a viernes de 8am a 6pm</li>
              <li>Sábados & domingos 10am a 5pm</li>
            </ul>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, x: "50%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "50%" }}
          transition={transition1}
          className="contact__mail"
        >
          <h4>Mandanos un Email</h4>
          <div className="contact__mail__1">
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
          </div>
          <input
            className="contact__mensaje"
            type="text"
            placeholder="Mensaje"
          />
          <button className="buttons">ENVIAR</button>
        </m.div>
      </div>
    </m.section>
  );
};

export default Contact;
