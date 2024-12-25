import React from "react";
import waveRight from "../../assets/imgs/wave-right.svg";
import waveLeft from "../../assets/imgs/wave-left.svg";
function Statistics() {
  return (
    <section class="statistics position-relative overflow-hidden d-flex align-items-center">
      <img src={waveLeft} class="decor-image position-absolute top-50 translate-middle" style={{ left: "48px" }} alt="Decorative Image" />
      <img src={waveRight} class="decor-image position-absolute top-50 translate-middle" style={{ right: "-48px" }} alt="Decorative Image" />

      <div class="container rounded  bg-white">
        <div class="row">
          <div class="col-4">
            <div class="stat-item d-flex flex-column align-items-center">
              <h3 class="stat-title">Properties</h3>
              <span class="stat-value">+300</span>
            </div>
          </div>
          <div class="col-4">
            <div class="stat-item d-flex flex-column align-items-center">
              <h3 class="stat-title">Renters</h3>
              <span class="stat-value">+300</span>
            </div>
          </div>
          <div class="col-4">
            <div class="stat-item d-flex flex-column align-items-center">
              <h3 class="stat-title">Owners</h3>
              <span class="stat-value">+300</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
