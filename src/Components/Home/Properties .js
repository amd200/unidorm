import React from 'react'
import { NavLink } from 'react-router-dom'
import TitleSection from '../Uitily/TitleSection'
import img1 from "../../assets/imgs/OC3KH20 2.jpg"
import timeCirle from "../../assets/imgs/Time Circle.svg"
import fi_info from "../../assets/imgs/fi_info.svg"
import bed from "../../assets/imgs/bed.svg"
import bathroom from "../../assets/imgs/bathroom.svg"
import size from "../../assets/imgs/size.svg"
function Properties () {
  return (
    <section className="properties py-5">
    <div className="container">
      <TitleSection title="Neared for you" />
      <div className="row">
        <div className="col-lg-3 col-md-6 ">
          <div className="card mx-auto">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body position-relative">
              <h5 className="card-title">Cairo, Ain Shams near universities</h5>
              <div className="details-price">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <img src={timeCirle} className="me-2" alt="Time Circle" />
                    Full Year
                  </li>
                  <li>
                    <img src={fi_info} className="me-2" alt="fi_info" />
                    Department .Bills Included
                  </li>
                </ul>
                <p className="price"><span>$120</span> / month</p>
              </div>
              <ul
                className="list-unstyled flex-row details-room d-flex align-items-center justify-content-between border-top pt-2 flex-wrap">
                <li className="d-flex align-items-center">
                  <img src={bed} className="me-1" alt="bed" />
                  4 Beds
                </li>
                <li className="d-flex align-items-center">
                  <img src={bathroom} className="me-1" alt="Time Circle" />
                  1 Bathroom
                </li>

                <li className="d-flex align-items-center">
                  <img src={size} className="me-1" alt="fi_info" />
                  23 M
                </li>
              </ul>
              <NavLink to="#" className="btn btn-primary text-white text-decoration-none px-5 mx-auto w-75 d-block">Check</NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className="card mx-auto">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body position-relative">
              <h5 className="card-title">Cairo, Ain Shams near universities</h5>
              <div className="details-price">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <img src={timeCirle} className="me-2" alt="Time Circle" />
                    Full Year
                  </li>
                  <li>
                    <img src={fi_info} className="me-2" alt="fi_info" />
                    Department .Bills Included
                  </li>
                </ul>
                <p className="price"><span>$120</span> / month</p>
              </div>
              <ul
                className="list-unstyled flex-row details-room d-flex align-items-center justify-content-between border-top pt-2 flex-wrap">
                <li className="d-flex align-items-center">
                  <img src={bed} className="me-1" alt="bed" />
                  4 Beds
                </li>
                <li className="d-flex align-items-center">
                  <img src={bathroom} className="me-1" alt="Time Circle" />
                  1 Bathroom
                </li>

                <li className="d-flex align-items-center">
                  <img src={size} className="me-1" alt="fi_info" />
                  23 M
                </li>
              </ul>
              <NavLink to="#" className="btn btn-primary text-white text-decoration-none px-5 mx-auto w-75 d-block">Check</NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className="card mx-auto">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body position-relative">
              <h5 className="card-title">Cairo, Ain Shams near universities</h5>
              <div className="details-price">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <img src={timeCirle} className="me-2" alt="Time Circle" />
                    Full Year
                  </li>
                  <li>
                    <img src={fi_info} className="me-2" alt="fi_info" />
                    Department .Bills Included
                  </li>
                </ul>
                <p className="price"><span>$120</span> / month</p>
              </div>
              <ul
                className="list-unstyled flex-row details-room d-flex align-items-center justify-content-between border-top pt-2 flex-wrap">
                <li className="d-flex align-items-center">
                  <img src={bed} className="me-1" alt="bed" />
                  4 Beds
                </li>
                <li className="d-flex align-items-center">
                  <img src={bathroom} className="me-1" alt="Time Circle" />
                  1 Bathroom
                </li>

                <li className="d-flex align-items-center">
                  <img src={size} className="me-1" alt="fi_info" />
                  23 M
                </li>
              </ul>
              <NavLink to="#" className="btn btn-primary text-white text-decoration-none px-5 mx-auto w-75 d-block">Check</NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className="card mx-auto">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body position-relative">
              <h5 className="card-title">Cairo, Ain Shams near universities</h5>
              <div className="details-price">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <img src={timeCirle} className="me-2" alt="Time Circle" />
                    Full Year
                  </li>
                  <li>
                    <img src={fi_info} className="me-2" alt="fi_info" />
                    Department .Bills Included
                  </li>
                </ul>
                <p className="price"><span>$120</span> / month</p>
              </div>
              <ul
                className="list-unstyled flex-row details-room d-flex align-items-center justify-content-between border-top pt-2 flex-wrap">
                <li className="d-flex align-items-center">
                  <img src={bed} className="me-1" alt="bed" />
                  4 Beds
                </li>
                <li className="d-flex align-items-center">
                  <img src={bathroom} className="me-1" alt="Time Circle" />
                  1 Bathroom
                </li>

                <li className="d-flex align-items-center">
                  <img src={size} className="me-1" alt="fi_info" />
                  23 M
                </li>
              </ul>
              <NavLink to="#" className="btn btn-primary text-white text-decoration-none px-5 mx-auto w-75 d-block">Check</NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className="card mx-auto">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body position-relative">
              <h5 className="card-title">Cairo, Ain Shams near universities</h5>
              <div className="details-price">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <img src={timeCirle} className="me-2" alt="Time Circle" />
                    Full Year
                  </li>
                  <li>
                    <img src={fi_info} className="me-2" alt="fi_info" />
                    Department .Bills Included
                  </li>
                </ul>
                <p className="price"><span>$120</span> / month</p>
              </div>
              <ul
                className="list-unstyled flex-row details-room d-flex align-items-center justify-content-between border-top pt-2 flex-wrap">
                <li className="d-flex align-items-center">
                  <img src={bed} className="me-1" alt="bed" />
                  4 Beds
                </li>
                <li className="d-flex align-items-center">
                  <img src={bathroom} className="me-1" alt="Time Circle" />
                  1 Bathroom
                </li>

                <li className="d-flex align-items-center">
                  <img src={size} className="me-1" alt="fi_info" />
                  23 M
                </li>
              </ul>
              <NavLink to="#" className="btn btn-primary text-white text-decoration-none px-5 mx-auto w-75 d-block">Check</NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className="card mx-auto">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body position-relative">
              <h5 className="card-title">Cairo, Ain Shams near universities</h5>
              <div className="details-price">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <img src={timeCirle} className="me-2" alt="Time Circle" />
                    Full Year
                  </li>
                  <li>
                    <img src={fi_info} className="me-2" alt="fi_info" />
                    Department .Bills Included
                  </li>
                </ul>
                <p className="price"><span>$120</span> / month</p>
              </div>
              <ul
                className="list-unstyled flex-row details-room d-flex align-items-center justify-content-between border-top pt-2 flex-wrap">
                <li className="d-flex align-items-center">
                  <img src={bed} className="me-1" alt="bed" />
                  4 Beds
                </li>
                <li className="d-flex align-items-center">
                  <img src={bathroom} className="me-1" alt="Time Circle" />
                  1 Bathroom
                </li>

                <li className="d-flex align-items-center">
                  <img src={size} className="me-1" alt="fi_info" />
                  23 M
                </li>
              </ul>
              <NavLink to="#" className="btn btn-primary text-white text-decoration-none px-5 mx-auto w-75 d-block">Check</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  )
}

export default Properties 