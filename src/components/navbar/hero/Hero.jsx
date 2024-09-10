import "./hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>AHMET EMRE ÇAKMAK</h2>
          <h1>Software Engineer</h1>
          <div className="buttons">
            <button>See the latest works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="slidingTextContainer">
        
      </div>
      <div className="imageContainer">
        <img src="/hero2.png" alt="" />
      </div>
    </div>
  );
};
export default Hero;
