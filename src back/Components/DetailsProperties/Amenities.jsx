import React from "react";
import { useParams } from "react-router-dom";
import PropertieDetailsHook from "../../hook/Properties/PropertieDetailsHook";

function Amenities() {
  const { id } = useParams();
  const [propertie, loading] = PropertieDetailsHook(id)
  return (
    <>
      {loading === false && propertie.amenities && propertie.amenities.data && propertie.amenities.data.length > 0 && (<section className="Amenities mb-4">
        <h3>Amenities</h3>
        <div className="row">
          <div className="col-lg-4">
            <div className="badges">
              {loading === false && propertie.amenities && propertie.amenities.data && propertie.amenities.data.length > 0 && propertie.amenities.data.map((item) => <span class="badge me-2 px-4 py-2 mb-2">{item.attributes.amenities}</span>)}
            </div>
          </div>
        </div>
      </section>)}
    </>

  );
}

export default Amenities;
