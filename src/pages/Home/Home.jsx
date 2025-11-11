import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Developers from "../../components/Developers/Developers";
import Safe from "../../components/Safe/Safe";
import Footer from "../../components/Footer/Footer";



const Home = () => {
  useEffect(() => {
    document.title = "LiqX | Home";
  });
  return (
    <main>
      <Hero />
      <About />
      <Safe />
      <Developers />
    </main>
  );
};

export default Home;
