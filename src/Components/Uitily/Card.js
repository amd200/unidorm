import React from "react";
import { NavLink } from "react-router-dom";

function Card() {
    return (
        <div className="card mx-auto">
            <img src="assets/imgs/OC3KH20 2.jpg" className="card-img-top" alt="..." />
            <div className="card-body position-relative">
                <h5 className="card-title">Cairo, Ain Shams near universities</h5>
                <div className="details-price">
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center mb-2">
                            <img
                                src="assets/imgs/Time Circle.svg"
                                className="me-2"
                                alt="Time Circle"
                            />
                            Full Year
                        </li>
                        <li>
                            <img src="assets/imgs/fi_info.svg" className="me-2" alt="fi_info" />
                            Department .Bills Included
                        </li>
                    </ul>
                    <p className="price">
                        <span>$120</span> / month
                    </p>
                </div>
                <ul className="list-unstyled flex-row details-room d-flex align-items-center justify-content-between border-top pt-2 flex-wrap">
                    <li className="d-flex align-items-center">
                        <img src="assets/imgs/bed.svg" className="me-1" alt="bed" />4 Beds
                    </li>
                    <li className="d-flex align-items-center">
                        <img
                            src="assets/imgs/bathroom.svg"
                            className="me-1"
                            alt="Time Circle"
                        />
                        1 Bathroom
                    </li>

                    <li className="d-flex align-items-center">
                        <img src="assets/imgs/size.svg" className="me-1" alt="fi_info" />
                        23 M
                    </li>
                </ul>
                <NavLink to="#" className="btn btn-primary text-white text-decoration-none px-5 mx-auto w-75 d-block">
                    Check
                </NavLink>
            </div>
        </div>
    );
}

export default Card;
