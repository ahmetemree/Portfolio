import "./services.scss";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I can help your business grow up
          <br /> and move forward
        </p>
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business
          </h1>
          <button>What I Can Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quod
            placeat maiores in maxime nemo. Laudantium error id explicabo. Ipsum
            sequi harum dolor perspiciatis sed, laudantium optio hic? Eius,
            autem.
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
