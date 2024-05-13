import React from "react";
import { Input, Select } from "../../Components/Ui/Fields";
import ProfileImage from "../../Components/User/Profilemage";
import MenuProfile from "../../Components/User/MenuProfile";

function ProfilePage() {
  return (
    <main className="profileUser-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <MenuProfile />
          </div>
          <div className="col-lg-10">
            <ProfileImage />
            <form action="">
              <div className="row">
                <div className="col-12">
                  <Input type={"text"} placeholder={"Name"} />
                </div>
                <div className="col-lg-6">
                  <Input type={"email"} placeholder={"Email"} />
                </div>
                <div className="col-lg-6">
                  <Input type={"number"} placeholder={"Phone Number"} />
                </div>
                <div className="col-12">
                  <Input type={"text"} placeholder={"Location"} />
                </div>
                <div className="col-lg-6">
                  <Input type={"text"} placeholder={"University"} />
                </div>
                <div className="col-lg-6">
                  <Input type={"text"} placeholder={"College Name"} />
                </div>
                <div className="col-12">
                  <Input type={"text"} placeholder={"College Name"} />
                  <Select
                    options={[
                      {
                        value: "Select Payment method",
                        label: "Select Payment method",
                      },
                    ]}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
