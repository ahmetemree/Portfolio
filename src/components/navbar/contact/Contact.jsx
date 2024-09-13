import { animate, motion } from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const formRef = useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ba78zyo', 'template_by57kav', formRef.current, {
        publicKey: '-D8VkBdzY1LER4zrg',
      })
      .then(
        () => {
          setSuccess(true)
        },
        (error) => {
          setError(true)
          
        },
      );
  };
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contact Me!</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>business.aemrecakmak@gmail.com</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        
        <motion.form
          action=""
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Send</button>
          {success && "Message Succesfully Sent!" || error && "Error Occured!"}
          
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
