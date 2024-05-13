// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { PrimaryBtn } from "../Ui/Buttons";
// import img1 from "../../assets/imgs/propertie1.jpg";
// import timeCirle from "../../assets/imgs/Time Circle.svg";
// import fi_info from "../../assets/imgs/fi_info.svg";
// import bed from "../../assets/imgs/bed.svg";
// import bathroom from "../../assets/imgs/bathroom.svg";
// import size from "../../assets/imgs/size.svg";
// import { FaArrowRight } from "react-icons/fa";

// function Card({ customClass }) {
//   return (
//     <div className={`card  mx-auto ${customClass ? customClass : ""}`}>
//       <img src={img1} className="card-img-top" alt="..." />
//       <div className="card-body position-relative">
//         <div className="row">
//           <div className="col-lg-5">
//             <h5 className="card-title">Cairo, Ain Shams near universities</h5>
//             <ul className="list-unstyled">
//               <li className="d-flex align-items-center ">
//                 <img src={timeCirle} className="me-2" alt="Time Circle" />
//                 Full Year
//               </li>
//               <li>
//                 <img src={fi_info} className="me-2" alt="fi_info" />
//                 Department .Bills Included
//               </li>
//             </ul>
//             {/* <p className="price">
//                         <span>$120</span> / month
//                     </p> */}
//             <ul className="list-unstyled flex-row details-room d-flex align-items-center justify-content-between border-top pt-2 flex-wrap">
//               <li className="d-flex align-items-center">
//                 <img src={bed} className="me-1" alt="bed" />4 Beds
//               </li>
//               <li className="d-flex align-items-center">
//                 <img src={bathroom} className="me-1" alt="Time Circle" />1
//                 Bathroom
//               </li>

//               <li className="d-flex align-items-center">
//                 <img src={size} className="me-1" alt="fi_info" />
//                 23 M
//               </li>
//             </ul>
//           </div>
//           <div className="col-lg-7">
//           <PrimaryBtn
//           to={"/detailsproperties"}
//           title="Check"
//           customClass={"mx-auto  w-50 "}
//           icon={<FaArrowRight className="ms-3" />}
//         />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Card;
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

function Card() {
  const [isFavourite, setIsFavourite] = useState(false)
  const [data, setCards] = useState([{
    id: 1,
    name: "Cairo, Ain Shams near universities",
    details: [
      {
        time: "Full Year",
        info: "Department .Bills Included",
        beds: 4,
        bathroom: 1,
        size: 23
      },

    ],
    price: 120,
  }])
  const addTOFavourite = () => {

  }
  return (
    <>
      {data && data.length > 0 && data.map((card, index) => (
        <div className="card card-property mx-auto position-relative" key={card.id}>
          <img src={img1} className="card-img-top" alt="..." />
          <div className="favourite bg-white rounded-circle"></div>
          <div className="card-body position-relative">
            <h5 className="card-title">{card.name}</h5>
            <div className="details-price">
              <ul className="list-unstyled">
                {/* {card.details.map((detail, index) => (
                  console.log("x")
                ))} */}
                <li className="d-flex align-items-center mb-2">
                  <img src={timeCirle} className="me-2" alt="Time Circle" />
                  Full Year
                </li>
                <li>
                  <img src={fi_info} className="me-2" alt="fi_info" />
                  Department .Bills Included
                </li>
              </ul>
              <p className="price">
                <span>{card.price}</span> / month
              </p>
            </div>
            {/* <ul className="list-unstyled flex-row details-room d-flex align-items-center justify-content-center gap-3 border-top pt-2 flex-wrap"> */}
            <ul className="list-unstyled flex-row details-room d-flex align-items-center justify-content-between  border-top pt-2 flex-wrap">
              {card.details.map((detail, index) => (
                <>
                  <li className="d-flex align-items-center">
                    <img src={bed} className="me-1" alt="bed" />{detail.beds ? detail.beds : 0} Beds
                  </li>
                  <li className="d-flex align-items-center">
                    <img src={bathroom} className="me-1" alt="Time Circle" />{detail.bathroom ? detail.bathroom : 0} Bathroom
                  </li>
                  <li className="d-flex align-items-center">
                    <img src={size} className="me-1" alt="fi_info" />
                    {detail.size ? detail.size : 0} M <sup>2</sup>
                  </li>
                </>
              ))}

            </ul>
            <PrimaryBtn
              to={"/detailsproperties"}
              title="Check"
              customClass={"mx-auto  w-50 "}
              icon={<FaArrowRight className="ms-3" />}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
