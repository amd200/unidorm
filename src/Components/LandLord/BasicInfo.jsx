import React from 'react'
import MultiSelect from 'react-select';
import { Input, Select, TextArea } from '../Ui/Fields';
function BasicInfo() {
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
                    <TextArea placeholder={"Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum | "} />
                </div>
                <div className="col-lg-6">
                    <Select options={[{ value: "-- Apartment --", label: "Apartment" }]} />
                </div>
                <div className="col-lg-6">
                    <Input type={"number"} placeholder="Size m&sup2;" />
                </div>
                <div className="col-lg-6">
                    <Select options={[{ value: "-- Property Type -- ", label: "-- Property Type --" }]} />
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