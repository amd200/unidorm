import React from 'react'
import ReactStars from "react-rating-stars-component";
import { MdOutlineDateRange } from "react-icons/md";

function SideFilter() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className='side-filter mb-4 '>
      <div class="accordion " id="accordionPanelsStayOpenExample">
        <div class="accordion-item border-0 ">
          <h2 class="accordion-header border-bottom " id="panelsStayOpen-headingOne ">
            <button class="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Type 
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <ul className='list-unstyled'>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Studio
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Department
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Shared Room
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Private Room
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Student residence
                    </label>
                  </div>
                  <span>38</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="panelsStayOpen-headingTwo">
            <button class="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Location
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
          <div class="accordion-body">
              <ul className='list-unstyled'>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Close to University
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Neighborhood
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    City
                    </label>
                  </div>
                  <span>38</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="panelsStayOpen-headingThree">
            <button class="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Amenities
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
          <div class="accordion-body">
              <ul className='list-unstyled'>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Air Conditioning 
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Heating
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Wifi
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Bills included
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Smart Tv
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Kitchen
                    </label>
                  </div>
                  <span>38</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="panelsStayOpen-headingFour">
            <button class="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
            Amenities
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFour">
          <div class="accordion-body">
          <div className='row mb-3'>
              <div className='col-6'>
                <div className='min-max position-relative'>
                <input type="number" className='form-control'  placeholder="Min" />
                  <MdOutlineDateRange className='position-absolute end-0 top-50 translate-middle-y me-3' />

                </div>
              </div>
              <div className='col-6'>
              <div className='min-max position-relative'>
                <input type="number" className='form-control'  placeholder="Max" />
                  <MdOutlineDateRange className='position-absolute end-0 top-50 translate-middle-y me-3' />
                </div>
                           </div>
            </div>
              <ul className='list-unstyled'>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Full Year 
                    </label>
                  </div>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Semester
                    </label>
                  </div>
                </li>
               
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Academic Year
                    </label>
                  </div>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Month-to-Month
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="panelsStayOpen-headingFive">
            <button class="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
            Size
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFive">
          <div class="accordion-body">
            <div className='row mb-3'>
              <div className='col-6'>
                <div className='min-max position-relative'>
                <input type="number" className='form-control'  placeholder="Min" />

                </div>
              </div>
              <div className='col-6'>
              <div className='min-max position-relative'>
                <input type="number" className='form-control'  placeholder="Max" />
                </div>
                           </div>
            </div>
              <ul className='list-unstyled'>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    15 m² or more
                    </label>
                  </div>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    30 m² or more
                    </label>
                  </div>
                </li>
               
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    60 m² or more
                    </label>
                  </div>
                </li>
                <li className='d-flex align-items-center justify-content-between mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    90 m² or more
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item border-0">
          <h2 class="accordion-header border-bottom" id="panelsStayOpen-headingSix">
            <button class="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
            Rating
            </button>
          </h2>
          <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingSix">
          <div class="accordion-body">
          
              <ul className='list-unstyled'>
                <li className='d-flex align-items-center justify-content-between  mb-2'>
                  <div class="form-check d-flex align-items-center">
                    <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    <ReactStars
                    edit={false}
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      value={5}
                      activeColor="#ff8a00"
                    />
                    </label>
                  </div>
                    <span> 5.0</span>
                </li>
                <li className='d-flex align-items-center justify-content-between  mb-2'>
                  <div class="form-check d-flex align-items-center">
                    <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    <ReactStars
                    edit={false}
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      value={4}
                      activeColor="#ff8a00"
                    />
                    </label>
                  </div>
                    <span> 4.0 & up</span>
                </li>
                <li className='d-flex align-items-center justify-content-between  mb-2'>
                  <div class="form-check d-flex align-items-center">
                    <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    <ReactStars
                    edit={false}
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      value={4}
                      activeColor="#ff8a00"
                    />
                    
                    </label>
                  </div>
                  <span>3.0 & up</span>
                </li>
                <li className='d-flex align-items-center justify-content-between  mb-2'>
                  <div class="form-check d-flex align-items-center">
                    <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    <ReactStars
                    edit={false}
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      value={3}
                      activeColor="#ff8a00"
                    />
                    </label>
                  </div>
                  <span> 2.0 & up</span>
                </li>
                <li className='d-flex align-items-center justify-content-between  mb-2'>
                  <div class="form-check d-flex align-items-center">
                    <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    <ReactStars
                    edit={false}
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      value={1}
                      activeColor="#ff8a00"
                    />
                    </label>
                  </div>
                  <span>  1.0 & up</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideFilter