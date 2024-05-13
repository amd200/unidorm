import React from 'react'
import FormLogin from '../../Components/Login/FormLogin'
import saly2 from "../../assets/imgs/Saly-2.svg"
function LoginPage() {
  return (
    <main class="auth-page">
    <div class="container">
     <img src={saly2} class="mx-auto avatar-form  d-block" alt=""/>
     <div class="row justify-content-center">
      <div class="col-lg-6">
        <FormLogin/>
      </div>
     </div>
  </div>
</main>
  )
}

export default LoginPage