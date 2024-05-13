import React, { useState } from "react";
import Card from "../../Components/Uitily/Card";
import SideFilter from "../../Components/Properties/SideFilter";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "jquery-nice-select/css/nice-select.css";
import { useEffect, useRef } from "react";
import { AiOutlineBars } from "react-icons/ai";
import $ from "jquery";
import { PrimaryBtn } from "../../Components/Ui/Buttons";
window.jQuery = window.$ = $;
require("jquery-nice-select");

function PropertiesPage() {
  const {cardRectangle ,setCardRectangle } = useState(true)

  const selectRef = useRef();

  useEffect(() => {
    $(selectRef.current).niceSelect();
  }, []);

  return (
    <div className="properties-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideFilter />
          </div>
          <div className="col-lg-9">
            <div className="properties">
              <div className="row align-items-end mb-3 px-lg-0 px-4">
                <div className="col-lg-2 col-5">
                  <div className="sort d-flex   flex-column ">
                  <label className="me-2" style={{fontSize:"12px",width:"100px"}}>Sort by:</label>
                  <select ref={selectRef} className="wide" >
                    <option value="italy">Italy</option>
                    <option value="spain">Spain</option>
                    <option value="france">France</option>
                    <option value="brazil">Brazil</option>
                  </select>
                  </div>
                </div>
                <div className="col-lg-2 col-5">
                  <PrimaryBtn title={"List"} icon={<AiOutlineBars className="me-2" />} customClass={"flex-row-reverse"}  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <Card   />
                </div>
                <div className="col-lg-4 col-md-6">
                  <Card  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <Card  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <Card  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <Card  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <Card  />
                </div>
              </div>
            </div>
            <Stack spacing={2} className="d-flex  align-items-center mt-5">
              <Pagination count={10} color="primary" />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesPage;