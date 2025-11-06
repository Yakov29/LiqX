import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Developers from "../../components/Developers/Developers";
import Safe from "../../components/Safe/Safe";

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
