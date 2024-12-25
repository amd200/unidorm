import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PrimaryBtn } from "../Ui/Buttons";
import img1 from "../../assets/imgs/propertie1.jpg";
import timeCirle from "../../assets/imgs/Time Circle.svg";
import fi_info from "../../assets/imgs/fi_info.svg";
import bed from "../../assets/imgs/bed.svg";
import bathroom from "../../assets/imgs/bathroom.svg";
import size from "../../assets/imgs/size.svg";
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import baseUrl from "../../Api/baseUrl";
import { imgPrefix } from "../../services/defaultSettings";

function Card({ modeList, closeBtn, data, imgs, id }) {
  return (
    <div className={`card card-property mx-auto position-relative ${modeList ? 'list  p-4' : ''}`}>
      <div className={`row ${modeList ? 'align-items-center' : ''}`}>

        <div className={` ${modeList ? 'col-2' : 'col-12'} `}>
          <img src={imgPrefix + imgs.thumbnail.url} className={`card-img-top img-fluid`} alt="..." />
        </div>

        <div className={` ${modeList ? 'col-10' : 'col-12'}`}>
          {closeBtn && <button className="shadow-none btn-close " aria-label="Close"><IoMdClose /></button>}
          <div className={`description position-relative  ${modeList ? 'p-0' : 'p-3'}`}>
            <div className="row align-items-center">
              <div className={`${modeList ? 'col-8' : 'col-12'}`}>
                <h5 className="card-title mb-2">{data.title}</h5>
                <ul className={`list-unstyled ${modeList ? 'd-flex flex-row mb-1  flex-wrap mb-0' : ''}`}>
                  <li className={`d-flex align-items-center ${modeList ? 'me-3' : 'mb-2'}`}>
                    <img src={timeCirle} className="me-2" alt="Time Circle" />
                    Full Year
                  </li>
                  <li>
                    <img src={fi_info} className="me-2" alt="fi_info" />
                    Department .Bills Included
                  </li>
                </ul>
                <ul className={`list-unstyled flex-row details-room d-flex align-items-center   ${modeList ? 'mb-0 gap-4' : 'border-top justify-content-between'} pt-2 flex-wrap`}>
                  <li className="d-flex align-items-center">
                    <img src={bed} className="me-1" alt="bed" />{data.bedrooms} Beds
                  </li>
                  <li className="d-flex align-items-center">
                    <img src={bathroom} className="me-1" alt="Time Circle" />{data.bathrooms} Bathroom
                  </li>
                  <li className="d-flex align-items-center">
                    <img src={size} className="me-1" alt="fi_info" />
                    {data.size} M <sup>2</sup>
                  </li>

                </ul>
              </div>
              <div className={`d-flex  ${modeList ? 'col-4  flex-column align-items-center justify-content-center' : 'col-12 align-items-center justify-content-center'} `}>
                <p className={`price ${modeList ? 'position-relative top-0 end-0' : 'position-absolute'}`} > <span>${data.price}</span> / month </p>
                <PrimaryBtn
                  to={`/detailsproperties/${id}`}
                  title="Check"
                  customClass={`  ${modeList ? 'px-lg-5 px-md-4' : 'w-50'} } `}
                  icon={<FaArrowRight className="ms-3" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="favourite bg-white rounded-circle"></div> */}

    </div >
  );
}

export default Card;
