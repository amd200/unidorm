import React from 'react'
import user from "../../assets/imgs/user.jpg";
import { FaPhoneAlt } from "react-icons/fa";

function CardInfo() {
    return (
        <div className='card-info bg-white rounded p-3'>
            <div className="row align-items-center">
                <div className="col-lg-4 d-flex justify-content-center">
                    <img src={user} width="131" height="129" alt="" />
                </div>
                <div className="col-lg-8">
                    <h5 className='mb-4'>Ahmed Mohamed</h5>
                    <ul className='list-unstyled  d-flex flex-wrap align-items-center justify-content-between flex-wrap '>

                        <li className='d-flex align-items-center mb-3'>
                            <FaPhoneAlt className='me-2' />
                            <span>Ali3@gmail.com</span>
                        </li>

                        <li className='d-flex align-items-center mb-3'>
                            <FaPhoneAlt className='me-2' />
                            <span>+728684681498</span>
                        </li>

                        <li className='d-flex align-items-center'>
                            <FaPhoneAlt className='me-2' />
                            <span>+728684681498</span>
                        </li>

                        <li className='d-flex align-items-center'>
                            <FaPhoneAlt className='me-2' />
                            <span>Medicine, Alexandria </span>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    )
}

export default CardInfo
