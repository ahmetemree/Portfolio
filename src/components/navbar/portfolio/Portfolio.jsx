import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Turbo Tech Oto Aksesuar",
    img: "./turbotech.png",
    desc: "A car accessories shopping brand which you can get your needs from there!",
    website: "https://turbotechotoaksesuar.com/",
  },
  {
    id: 2,
    title: "AI-Strolog",
    img: "./aistrolog.png",
    desc: "An AI supported astrology assistant application which specified only for you.",
    website: "https://ai-strolog.com/",
  },
  {
    id: 3,
    title: "SmartAI",
    img: "./smartailogo.png",
    desc: "An AI application which you can chat about anything! You can send images, save chats and also It's easy to use!",
    website: "https://smart-ai-two.vercel.app/",
  },
  {
    id: 4,
    title: "Booking-App",
    img: "./bookinglogo.png",
    desc: "Booking application which provides you to search any estate for stay. You can filter places, save them and send message to their owner!",
    website: "https://booking-app-three-phi.vercel.app/",
  },
  {
    id: 5,
    title: "Chat-App",
    img: "./chatapplogo.png",
    desc: "Chat application for using chatting between saved users. You can register and you can enjoy chatting with other people!",
    website: "https://chatss-app.vercel.app/",
  },

  {
    id: 6,
    title: "Pethomealpi",
    img: "https://res.cloudinary.com/dytlryqvs/image/upload/v1723987281/logo_gjafqg.png",
    desc: "An application for you to shopping for your pets&cats. You can buy your needs for your animals in Pethomealpi website (Under production).",
    website: "https://pethomealpi-web.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]s
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <a href={item.website} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt="" />
            </a>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.website} target="_blank" rel="noopener noreferrer">
                See Website
              </a>{" "}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}{" "}
    </div>
  );
};

export default Portfolio;
