import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/navbar/contact/Contact";
import Hero from "./components/navbar/hero/Hero";
import Parallax from "./components/navbar/parallax/Parallax";
import Portfolio from "./components/navbar/portfolio/Portfolio";
import Services from "./components/navbar/services/Services";
const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type= "services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;
