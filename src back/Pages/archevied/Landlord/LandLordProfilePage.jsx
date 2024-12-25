import React from "react";
import MenuProfile from "../../Components/LandLord/MenuProfile";
import ProfileImage from "../../Components/LandLord/Profilemage";
import PersonalInfo from "../../Components/LandLord/PersonalInfo";
import PaymentMethods from "../../Components/LandLord/PaymentMethods";

function LandLordProfilePage() {
  return (
    <main className="profileUser-page mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <MenuProfile />
          </div>
          <div className="col-lg-10">
            <ProfileImage />
            <PersonalInfo />
            <PaymentMethods />
          </div>
        </div>
      </div>
    </main>
  );
}

export default LandLordProfilePage;
