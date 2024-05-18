import React, { useState } from "react";
import Services from "../../Components/Home/Services";
import Landing from "../../Components/Home/Landing";
import Properties from "../../Components/Home/Properties ";

function HomePage() {
  return (
    <main className="home-page">
      <iframe src="https://bassthalk.com/" width={"100%"} height={"1000"}></iframe>
      <Landing />
      <Properties />
      <Services />
    </main>
  );
}

export default HomePage;
