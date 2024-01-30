import React from "react";

// import { Banner } from "../components/Banner";
// import { Contact } from "../components/Contact";
// import { CTA } from "../components/CTA";
// import { Feature } from "../components/Feature";
import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";
import { FAQ } from "../components/FAQ";
// import { Services } from "../components/Services";
// import { Stats } from "../components/Stats";
// import { Team } from "../components/Team";
// import { Testimonials } from "../components/Testimonials";

const LandingPage = () => {
  return (
    <div className="w-screen">
      {/* <Header /> */}
      <FAQ />
      {/* <Banner /> */}
      {/* <Services /> */}
      {/* <Feature /> */}
      {/* <Testimonials /> */}
      {/* <Stats /> */}
      {/* <Team /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;