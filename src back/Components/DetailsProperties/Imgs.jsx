import React from "react";
import propertie1 from "../../assets/imgs/propertie1.jpg";
import propertie2 from "../../assets/imgs/propertie2.jpg";
import propertie3 from "../../assets/imgs/propertie3.jpg";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

// import plugins if you need
import lgZoom from "lightgallery/plugins/zoom";

function Imgs() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="imgs-properties mb-2">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom]}
        elementClassNames="row"
      >
        <a href={propertie1} className="col-lg-4 col-md-6 mb-3">
          <img alt="propertie1" src={propertie1} className="img-fluid" />
        </a>
        <a href={propertie2} className="col-lg-4 col-md-6 mb-3">
          <img alt="propertie2" src={propertie2} className="img-fluid" />
        </a>
        <a href={propertie3} className="col-lg-4 col-md-6 mb-3">
          <img alt="propertie3" src={propertie3} className="img-fluid" />
        </a>
      </LightGallery>
    </div>
  );
}

export default Imgs;
