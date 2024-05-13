import React from "react";
import { Input } from "../Ui/Fields";
import { NavLink } from "react-router-dom";

function FormSignUp() {
  return (
    <form action="" class="bg-white form rounded p-4 my-5 bg-white">
      <h3 class="mb-4">Create your account</h3>
      <Input type={"text"}  placeholder={"Name"} />
      <Input type={"email"}  placeholder={"Academic Email"} />
      <Input type={"password"}  placeholder={"Password"} />
      <Input type={"password"}  placeholder={"confirm passoword"} />
      <button class="btn btn-primary text-white w-100 mt-4">Create account</button>
    </form>
  );
}

export default FormSignUp;
