import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destination";
import ChooseUs from "./components/ChooseUs";
import TourPackages from "./components/TourPackages";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <ChooseUs />
      <TourPackages />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
