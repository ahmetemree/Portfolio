import { useRef } from "react";
import "./services.scss";
import { animate, motion,useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {

    const ref = useRef()
     const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      // whileInView="animate"
    // ref={ref}
    // animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I can help your business grow up
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"rebeccapurple"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"rebeccapurple"}}>For Your</motion.b> Business
          </h1>
          <button>What Can I Offer You?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Experience</h2>
          <p>
            I can create your software with all my experiences gained from past
            projects which I developed.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>User-Friendly Softwares</h2>
          <p>
            I care about user experience while using the product. User
            experience in my projects always has priority!
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Secure</h2>
          <p>
            I consider the security issue with all my software products. Your
            data and your privacy always under protection!
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Faster Products</h2>
          <p>
            As a Software Engineer, I can say that the software product should
            have fast interface and smooth transitions. Your software will
            definitely all of these!
          </p>
          <div className="buttons">

          <a href="/#Portfolio"><button>See My Projects</button></a>
          <a href="/#Contact"><button>Reach Me</button></a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
