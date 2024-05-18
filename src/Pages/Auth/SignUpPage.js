import React from "react";
import saly2 from "../../assets/imgs/Saly-2.svg";
import { Input } from "../../Components/Ui/Fields";
function SignUpPage() {
  // const [
  //   name,
  //   email,
  //   phone,
  //   password,
  //   confirmPassword,
  //   onChangeName,
  //   onChangeEmail,
  //   onChangePhone,
  //   onChangePassword,
  //   onChangeConfirmPassword,
  //   OnSubmit,
  // ] = RegisterHook();
  return (
    <main className="auth-page">
      <div className="container">
        <img src={saly2} className="mx-auto avatar-form  d-block" alt="" />
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div  className="form-auth bg-white form rounded p-4 my-5 bg-white">
            <h3 className="mb-4">Create your account</h3>
            <Input
              type={"text"}
              // value={name}
              // onChange={onChangeName}
              placeholder={"Name"}
            />
            <Input
              type={"email"}
              // value={email}
              // onChange={onChangeEmail}
              placeholder={"Academic Email"}
            />
            <Input
              type={"number"}
              // value={phone}
              // onChange={onChangePhone}
              placeholder={"Phone Number"}
            />
            <Input
              type={"password"}
              // value={password}
              // onChange={onChangePassword}
              placeholder={"Password"}
            />
            <Input
              type={"password"}
              // value={confirmPassword}
              // onChange={onChangeConfirmPassword}
              placeholder={"confirm passoword"}
            />
            <button
              // onClick={OnSubmit}
              className="btn btn-primary text-white w-100 mt-4"
            >
              Create account
            </button>{" "}
            </div>
       
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;
