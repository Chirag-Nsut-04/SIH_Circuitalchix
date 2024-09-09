import React from "react";
import Offer from "../components/Offer";
import Services from "../components/Services"
import Testimonial from "../components/Testimonial"
import Tours from "../components//Tours"
import HomePage from "../components/HomePage"
export default function Home() {
  return (
    <div>
        <HomePage/>
      <Services />
      {/* <Destinations /> */}
      <Offer />
      <Tours />
      <Testimonial />
      {/* <DownloadApp /> */}
    </div>
  );
}
