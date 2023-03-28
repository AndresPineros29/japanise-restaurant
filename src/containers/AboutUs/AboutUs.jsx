import "./aboutus.css";
import { motion as m } from "framer-motion";
import { transition1 } from "../../transitions";
import imageFondo from "../../assets/3d_ramen.png";

const AboutUs = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="about__container"
    >
      <m.h2
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
      >
        Sobre nosostros
      </m.h2>
      <div className="about__content">
        <div className="about__content__info">
          <m.p
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
          >
            Nuestra Cocina Es Auténtica, Se Elabora Artesanalmente Cada Día Con
            Ingredientes De Alta Calidad Por nuestros chef especializados,
            estudiados en Osaka Japón.
          </m.p>
          <m.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={transition1}
            className="about__content__image"
          >
            <img src={imageFondo} alt="image_sushi" />
          </m.div>
          <m.p
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
          >
            Buscamos Que Vivas Una Experiencia Entorno A Una Mesa Llena De
            Historias Que Contar. Kaori Fuji Sushi Bar Nació Para Que Juntos
            Celebremos Las Cosas Buenas De La Vida.
          </m.p>
        </div>
      </div>
    </m.section>
  );
};

export default AboutUs;
