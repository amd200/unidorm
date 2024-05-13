import React from "react";
import { Input } from "../Ui/Fields";
import { NavLink } from "react-router-dom";

function FormLogin() {
  return (
    <form action="" class="bg-white form rounded p-4 my-5 bg-white">
      <h3 class="mb-4">Sign In</h3>
      <Input type={"text"}  placeholder={"Academic Email"} />
      <Input type={"password"}  placeholder={"Password"} />
      <NavLink to="#">Forget password ?</NavLink>
      <button class="btn btn-primary text-white w-100 mt-4">Sign In</button>
    </form>
  );
}

export default FormLogin;
