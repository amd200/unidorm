import React from 'react'
import saly2 from "../../assets/imgs/Saly-2.svg"
import FormSignUp from '../../Components/SignUp/FormSignUp'
function SignUpPage() {
  return (
    <main class="auth-page">
    <div class="container">
     <img src={saly2} class="mx-auto avatar-form  d-block" alt=""/>
     <div class="row justify-content-center">
      <div class="col-lg-6">
        <FormSignUp/>
      </div>
     </div>
  </div>
</main>
  )
}

export default SignUpPage