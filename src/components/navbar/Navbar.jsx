import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 , x:-50}}
          animate={{ opacity: 1, scale: 1 , x:0}}
          transition={{ duration: 1.5 }}
        >
          Ahmet Emre Çakmak
        </motion.span>
        <motion.div
          className="social"
          
        >
          <motion.a href="https://www.linkedin.com/in/ahmet-emre-%C3%A7akmak-46092b240/"initial={{ opacity: 0 , x:50}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 , delay:0.3}}>
            <img src="/linkedin.png" alt="" />
          </motion.a>
          <motion.a href="https://github.com/ahmetemree"initial={{ opacity: 0 , x:50}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 ,delay:0.6}}>
            <img src="/github.png" alt="" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
