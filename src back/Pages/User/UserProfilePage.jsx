import React from "react";
import ProfileImage from "../../Components/User/Profilemage";
import MenuProfile from "../../Components/User/MenuProfile";
import PaymentMethods from "../../Components/User/PaymentMethods";
import PersonalInfo from "../../Components/User/PersonalInfo";

function UserProfilePage() {
  return (
    <main className="profileUser-page py-5">
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

export default UserProfilePage;
