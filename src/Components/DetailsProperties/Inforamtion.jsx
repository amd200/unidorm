import React, { useEffect, useRef, useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import bed from "../../assets/imgs/bed.svg";
import bathroom from "../../assets/imgs/bathroom.svg";
import size from "../../assets/imgs/size.svg";
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, PinterestShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton, FacebookMessengerShareButton } from "react-share";
import { Rating } from "react-simple-star-rating";
import Badges from "./Badges";
import Modal from "../Uitily/Modal";
import { Input, TextArea } from "../Ui/Fields";
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");
function Inforamtion() {
  const monthRef = useRef();
  useEffect(() => {
    $(monthRef.current).niceSelect();
  }, []);
  const [isActive, setIsActive] = useState(false);
  const shareRef = useRef(null);
  const shareUrl = "https://www.facebook.com/ahmed.elhosseni.71";

  const handleShareButtonClick = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (shareRef.current && !shareRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="information mb-4 ">
      <div className="row">
        <div className="col-lg-8 border-end position-relative">
          <div className={`toggle-shareButton ${isActive ? "active" : ""}`}>
            <div className="shareButton" onClick={handleShareButtonClick} ref={shareRef}>
              <CiShare2 />
            </div>
            <nav>
              <li style={{ "--i": 1, "--clr": "#3b5998" }}>
                <FacebookShareButton url={shareUrl}>
                  <FaFacebook />
                </FacebookShareButton>
              </li>
              <li style={{ "--i": 2, "--clr": "#25d366" }}>
                <WhatsappShareButton url={shareUrl}>
                  <FaWhatsapp size={32} />
                </WhatsappShareButton>
              </li>
              <li style={{ "--i": 3, "--clr": "#000" }}>
                <TwitterShareButton url={shareUrl}>
                  <FaXTwitter />
                </TwitterShareButton>
              </li>
              <li style={{ "--i": 4, "--clr": "#c71610" }}>
                <EmailShareButton url={shareUrl}>
                  <SiGmail />
                </EmailShareButton>
              </li>
              <li style={{ "--i": 5, "--clr": "#0a66c2" }}>
                <LinkedinShareButton url={shareUrl}>
                  <FaLinkedin />
                </LinkedinShareButton>
              </li>
              <li style={{ "--i": 6, "--clr": "#00B2FF" }}>
                <FacebookMessengerShareButton appId="342417145325054" url={shareUrl}>
                  <FaFacebookMessenger />
                </FacebookMessengerShareButton>
              </li>
              <li style={{ "--i": 7, "--clr": "#bd081c" }}>
                <PinterestShareButton url={shareUrl} media={shareUrl}>
                  <FaPinterest />
                </PinterestShareButton>
              </li>
              <li style={{ "--i": 8, "--clr": "#229ED9" }}>
                <TelegramShareButton url={shareUrl}>
                  <FaTelegramPlane />
                </TelegramShareButton>
              </li>
            </nav>
          </div>
          <h3 className="mb-2">Cairo, Ain Shams near universities</h3>
          <div className="mb-3">
            <Rating fillColor="#ff8a00" style={{ position: "relative", bottom: "3px" }} onClick={handleRating} size={19} readonly={true} initialValue={5} className="me-2" />
          </div>
          <Badges numBadges={3} customClass={"mb-2"} />
          <ul className="list-unstyled flex-row details-room d-flex align-items-center  pt-2 flex-wrap">
            <li className="d-flex align-items-center me-4 mb-2">
              <img src={bed} className="me-1" alt="bed" />4 Beds
            </li>
            <li className="d-flex align-items-center me-4 mb-2">
              <img src={bathroom} className="me-1" alt="Time Circle" />1 Bathroom
            </li>
            <li className="d-flex align-items-center me-4 mb-2">
              <img src={size} className="me-1" alt="fi_info" />
              23 M
            </li>
          </ul>
          <div className="description">
            <h3 className="mb-2">Description</h3>
            <p>
              At The Landing, we know luxury is more than the sum of its parts it's about a seamless daily experience that finds you where you are and offers a multitude of possibilities right at your fingertips. A rooftop terrace for sunrise yoga. Co-working spaces to keep you inspired. A resident app that lets you order in, send laundry out, or get your car washed downstairs. Welcoming, inviting, a place to rest and recharge when the day is done, we'll greet you at the door and remind you why
              you've made this place your own personal retreat.
            </p>
          </div>
          <Modal />
        </div>
        <div className="col-lg-4">
          <div className="d-flex justify-content-center h-100 align-items-center">
            <div className="d-flex align-items-center flex-lg-column justify-content-center  w-100 mt-lg-0 mt-2">
              <button className="btn btn-primary2 px-lg-5 px-4 mb-lg-3 me-lg-0 me-4" data-bs-toggle="modal" data-bs-target="#requestTour">
                Request a tour
              </button>
              <button className="btn btn-borderOrange px-lg-5 px-4">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="requestTour" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header border-0 d-flex justify-content-center">
              <h5 class="modal-title" id="staticBackdropLabel">
                Request a tour{" "}
              </h5>
              <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form action="">
                <div className="row">
                  <div className="col-12">
                    <Input type={"text"} placeholder={"Name"} />
                  </div>
                  <div className="col-12">
                    <Input type={"email"} placeholder={"Email"} />
                  </div>
                  <div className="col-lg-6">
                    <Input type={"number"} placeholder={"Phone Number"} />
                  </div>
                  <div className="col-lg-4">
                    <Input type={"text"} placeholder={"lease Date"} />
                  </div>
                  <div className="col-lg-2">
                    <select name="" ref={monthRef} className="wide" id="">
                      <option value="Month">Month</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>
                  <div className="col-lg-6">
                    <Input type={"date"} placeholder={"Date"} />
                  </div>
                  <div className="col-lg-6">
                    <Input type={"date"} placeholder={"Date"} />
                  </div>
                  <div className="col-12">
                    <TextArea placeholder={"Message"} />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer border-0">
              {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button type="button" class="btn btn-primary2 px-5 mx-auto">
                Send a reqauest
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inforamtion;
