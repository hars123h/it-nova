import React from "react";

function HomeCard() {
  return (
    <div class="partnership-section" style="overflow: hidden;">
      <div class="partnership-card" style="overflow: hidden;">
        <p class="partnership-card-para">PARTNERSHIP</p>
        <h2 class="partnership-card-heading">
          In Partnership with Google for Education
        </h2>
        <p class="partnership-card-para-grey"></p>
        <div
          class="partnership-card-rinex-tag aos-init aos-animate"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <img alt="" />
        </div>
        <div class="partnership-card-handshake-tag">
          <img alt="" />
        </div>
        <div
          class="partnership-card-iit-tag aos-init aos-animate"
          data-aos-duration="1000"
          data-aos="fade-left"
        >
          <img alt="" />
        </div>
      </div>
      <div class="recognition-card">
        <p class="partnership-card-para">RECOGNITION</p>
        <h5 class="recognition-card-heading">
          Recognized and Certified by the Nation
        </h5>
      </div>
    </div>
  );
}

export default HomeCard;
