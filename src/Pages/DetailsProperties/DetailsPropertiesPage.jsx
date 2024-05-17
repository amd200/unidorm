import React, { useEffect, useRef, useState } from "react";
import Imgs from "../../Components/DetailsProperties/Imgs";
import Amenities from "../../Components/DetailsProperties/Amenities";
import Facilities from "../../Components/DetailsProperties/Facilities";
import ReviewContainer from "../../Components/DetailsProperties/ReviewContainer";
import Inforamtion from "../../Components/DetailsProperties/Inforamtion";



function DetailsPropertiesPage() {
  return (
    <div className="detailsProperties-page">
      <div className="container">
        <Imgs />
        <Inforamtion/>
        <Amenities />
        <Facilities />
        <ReviewContainer />
      </div>
    </div>
  );
}

export default DetailsPropertiesPage;
