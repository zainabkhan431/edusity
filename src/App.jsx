import { useState } from "react";
import About from "./Components/About";
import Campus from "./Components/Campus";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Programe from "./Components/Programe";
import Testimonials from "./Components/Testimonials";

import Title from "./Components/Title";
import VideoPlayer from "./Components/VideoPlayer";
function App() {
  const [playstate, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <Title title="Our PROGRAM" subtitle="What We Offer" />
        <Programe />
        <About setPlayState={setPlayState} />
        <Title title="Gallery" subtitle="Campus Photos" />
        <Campus />
        <Title title="TESTIMONIALS" subtitle="What Student Says" />
        <Testimonials />
        <Title title="CONTACT US" subtitle="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playstate={playstate} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
