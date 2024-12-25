import React from "react";
import saly2 from "../../assets/imgs/Saly-2.svg";
import { NavLink } from "react-router-dom";
import LoginHook from "../../hook/Auth/LoginHook";
import { Input } from "../../Components/Ui/Fields";
function LoginPage() {
  // const [email, password, onChangePassword, onChangeEmail, OnSubmit, isPress] =
  //   LoginHook();
  return (
    <main class="auth-page">
      <div class="container">
        <img src={saly2} class="mx-auto avatar-form  d-block" alt="" />
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div className="form-auth bg-white form rounded p-4 my-5 bg-white">
              <h3 class="mb-4">Sign In</h3>
              <Input
                type={"text"}
                // value={email}
                // onChange={onChangeEmail}
                placeholder={"Academic Email"}
              />
              <Input
                type={"password"}
                // value={password}
                // onChange={onChangePassword}
                placeholder={"Password"}
              />
              <NavLink to="#">Forget password ?</NavLink>
              <button
                // onClick={OnSubmit}
                class="btn btn-primary text-white w-100 mt-4"
              >
                Sign In
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
