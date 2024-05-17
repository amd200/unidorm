import React from 'react'
import user from "../../assets/imgs/user.jpg"
import { FiEdit } from "react-icons/fi";

function ProfileImage() {
  return (
    <div className='profile-img d-flex justify-content-center align-items-center flex-column my-4'>
        <img src={user} alt='user-img' className='mb-3'/>
        <label htmlFor="upload">Edit Image <FiEdit style={{color:"#5570f1"}} /> </label>
        <input type="file" id='upload' className='d-none'/>
    </div>
  )
}

export default ProfileImage