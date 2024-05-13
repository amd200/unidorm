import React from "react";
import TitleSection from "../Uitily/TitleSection";
function Services() {
  return (
    <section className="servces">
      <div className="container">
        <TitleSection title={"Our Services for you"} />
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card-servce d-flex align-items-center flex-column justify-content-center text-center rounded">
              <div
                className="icon d-flex align-items-center justify-content-center"
                style={{ backgroundColor: " #FEF5EA" }}
              >
                <ion-icon
                  name="home-outline"
                  style={{ color: " #f57e77" }}
                ></ion-icon>
              </div>
              <h3>Modern and Comfortable Spaces</h3>
              <p>
                Stylish, fully furnished apartments designed for student
                comfort.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-servce d-flex align-items-center flex-column justify-content-center text-center rounded">
              <div
                className="icon d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "rgba(85, 112, 241, 0.16)" }}
              >
                <ion-icon
                  style={{ color: " #0B21E6" }}
                  name="location-outline"
                ></ion-icon>
              </div>
              <h3>Modern and Comfortable Spaces</h3>
              <p>
                Stylish, fully furnished apartments designed for student
                comfort.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-servce d-flex align-items-center flex-column justify-content-center text-center rounded">
              <div
                className="icon d-flex align-items-center justify-content-center"
                style={{
                  background: "rgba(248, 179, 46, 0.13)",
                }}
              >
                <ion-icon
                  style={{ color: "#FFAD33" }}
                  name="card-outline"
                ></ion-icon>
              </div>
              <h3>Modern and Comfortable Spaces</h3>
              <p>
                Stylish, fully furnished apartments designed for student
                comfort.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-servce d-flex align-items-center flex-column justify-content-center text-center rounded">
              <div
                className="icon d-flex align-items-center justify-content-center"
                style={{
                  background: "rgba(93, 193, 181, 0.13)",
                }}
              >
                <ion-icon
                  style={{ color: "#5DC1B5" }}
                  name="headset-outline"
                ></ion-icon>
              </div>
              <h3>Modern and Comfortable Spaces</h3>
              <p>
                Stylish, fully furnished apartments designed for student
                comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
