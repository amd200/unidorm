import React from "react";
import Services from "../../Components/Home/Services";
import Landing from "../../Components/Home/Landing";
import Properties from "../../Components/Home/Properties ";

function HomePage() {
  return (
    <main className="home-page">
      <Landing />
      <Properties/>
      <Services />
    </main>
  );
}

export default HomePage;
