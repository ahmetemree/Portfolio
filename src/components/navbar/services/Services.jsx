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
        <hr />
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
          <button>What Can I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Experience</h2>
          <p>
            I can create your software with all my experiences gained from past projects which I developed.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>User-Friendly Softwares</h2>
          <p>
          I care about user experience while using the product. User experience in my projects always has priority!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Secure</h2>
          <p>
            I consider the security issue with all my software products. Your data and your privacy always under protection!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Faster Products</h2>
          <p>
            As a Software Engineer, I can say that the software product should have fast interface and smooth transitions. Your software will definitely all of these!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
