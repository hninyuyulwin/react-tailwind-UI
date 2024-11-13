import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestBook from "./components/BestBook";
import Banner from "./components/Banner";
import AppStoreBanner from "./components/AppStoreBanner";
import AllBooks from "./components/AllBooks";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <BestBook />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
