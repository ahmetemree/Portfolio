import React from "react";
import { motion } from "framer-motion";

const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{
            scale: 1.1,
            backgroundColor: "whitesmoke",
            padding: "10px",
            borderRadius: "5px",
          }}
          whileTap={{scale:0.95}}
          onClick={handleScroll}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
