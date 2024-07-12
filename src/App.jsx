import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data.json";
import SmoothScroll from "smooth-scroll";
import BackToTopButton from "./components/backtotop";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);

    const updateClickCount = async () => {
      try {
        const response = await fetch("http://localhost:5000/NumberClickPage");
        const data = await response.json();
        const { numberClick } = data;

        await fetch("http://localhost:5000/NumberClickPage", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            numberClick: numberClick + 1,
          }),
        });
      } catch (error) {
        console.error("Error updating click count:", error);
      }
    };

    updateClickCount();
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />

      {/* Render the BackToTopButton component */}
      <BackToTopButton />
    </div>
  );
};

export default App;
