import React from "react";
import MenuProfile from "../../Components/LandLord/MenuProfile";
import AddImgsProperties from "../../Components/LandLord/AddImgsProperties";
import AddVideosProperties from "../../Components/LandLord/AddVideosProperties ";
import BasicInfo from "../../Components/LandLord/BasicInfo";
import Location from "../../Components/LandLord/Location";
import Pricing from "../../Components/LandLord/Pricing";
import Facilities from "../../Components/LandLord/Facilities";
import { DangerBtn, PrimaryBtn } from "../../Components/Ui/Buttons";

function LandLordAddListingPage() {
  return (
    <div className="addListing-page py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <MenuProfile />
          </div>
          <div className="col-lg-10">
            <div className="d-flex align-items-center justify-content-end gap-2">
              <DangerBtn title={"Cancel"} to={"#"} />
              <PrimaryBtn title={"Add Listing"} to={"#"} />
            </div>

            <AddImgsProperties />
            <AddVideosProperties />
            <BasicInfo />
            <Location />
            <Pricing />
            <Facilities />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandLordAddListingPage;
