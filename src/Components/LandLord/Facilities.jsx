import React from 'react'
import MultiSelect from 'react-select';

function Facilities() {

    const restaurantOptions = [
        { value: 'KFC', label: 'KFC', },
        { value: 'Elayoupi', label: 'Elayoupi' },
        { value: 'Boghdadai', label: 'Boghdadai' },
        { value: "McDonald's", label: "McDonald's" },
        { value: "Domino's Pizza", label: "Domino's Pizza" },
        { value: 'Pizza Hut', label: 'Pizza Hut' },
        { value: 'Burger King', label: 'Burger King' },
        { value: 'Subway', label: 'Subway' },
    ];
    const closeToOptopns = [
        { value: 'Bus Stop', label: 'Bus Stop', },
    ];
    return (
        <div className='facilities mb-4'>
            <h3 className='mb-3'>Facilities</h3>
            <div className="row">
                <div className="col-12">
                    <label className='mb-1'>Nearby Restaurants</label>
                    <p className='mb-1'>Adding names of nearby restaurants helps students to know what places around them</p>
                    <MultiSelect
                        placeholder="Add Restaurant Name"
                        isMulti
                        options={restaurantOptions}
                        className="basic-multi-select select-multi mb-4 shadow-none border-0"
                        classNamePrefix="select"
                    />
                </div>
                <div className="col-12">
                    <label className='mb-1'>Public Transportation</label>
                    <MultiSelect
                        placeholder="Close To"
                        isMulti
                        options={closeToOptopns}
                        className="basic-multi-select select-multi mb-4 shadow-none border-0"
                        classNamePrefix="select"
                    />
                </div>
            </div>
        </div>
    )
}

export default Facilities