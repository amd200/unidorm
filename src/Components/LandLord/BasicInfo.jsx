import React, { useEffect, useRef } from 'react'
import MultiSelect from 'react-select';
import { Input, TextArea } from '../Ui/Fields';
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");
function BasicInfo() {
    const apartmentRef = useRef();
    const propertyTypeRef = useRef();
    useEffect(() => {
        $(apartmentRef.current).niceSelect();
        $(propertyTypeRef.current).niceSelect();
    }, []);
    const amenitiesOptions = [
        { value: 'Air Conditioning', label: 'Air Conditioning', },
        { value: 'Electricity', label: 'Electricity' },
        { value: 'Balacony', label: 'Balacony' },
        { value: 'Heating', label: 'Heating' },
        { value: 'Wifi', label: 'Wifi' },
        { value: 'Smart Tv', label: 'Smart Tv' },
        { value: 'Kitchen', label: 'Kitchen' },
        { value: 'Elevator', label: 'Elevator' },
    ];
    return (
        <section className='basicInfo mb-4'>
            <h3 className='mb-3'>Basic Info</h3>
            <div className="row">
                <div className="col-12">
                    <TextArea placeholder={"Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum | "} customClass={"mb-4"} />
                </div>
                <div className="col-lg-6">
                    <select ref={apartmentRef} className='wide' name="" id="">
                        <option value="-- Apartment --">-- Apartment --</option>
                    </select>
                </div>
                <div className="col-lg-6">
                    <Input type={"number"} placeholder="Size m&sup2;" />
                </div>
                <div className="col-lg-6">
                    <select className='wide' name="" ref={propertyTypeRef} id="">
                        <option value="-- Property Type --">-- Property Type --</option>
                    </select>
                </div>
                <div className="col-lg-6">
                    <Input type={"number"} placeholder={"Bed Numbers"} />
                </div>
                <div className="col-12">
                    <MultiSelect
                        // defaultValue={[colourOptions[2], colourOptions[3]]}
                        placeholder=" Select Amenities"
                        isMulti
                        options={amenitiesOptions}
                        className="basic-multi-select select-multi mb-4 shadow-none border-0"
                        classNamePrefix="select"
                    />
                </div>
                <div className="col-12">
                    <Input type={"text"} placeholder={"States"} />
                </div>
            </div>
        </section>
    )
}

export default BasicInfo