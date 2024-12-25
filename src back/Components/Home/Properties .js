import React from "react";
import { NavLink } from "react-router-dom";
import TitleSection from "../Uitily/TitleSection";
import Card from "../Properties/Card";
import PropertiesPageHook from "../../hook/Properties/PropertiesPageHook";

function Properties() {
  const [properties, loading] = PropertiesPageHook();
  return (
    <section className="properties py-5">
      <div className="container">
        <TitleSection title="Neared for you" />
        <div className="row">
          {properties &&
            properties.length > 0 &&
            properties.slice(-6).map((item) => (
              <div className="col-xl-3 col-md-6 ">
                <Card
                  id={item.id}
                  data={item.attributes}
                  imgs={item.attributes.imgs.data[0].attributes.formats}
                  key={item.id}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;
