import React from 'react'
import { Input, Select } from '../Ui/Fields'

function Pricing() {
    return (
        <div className='pricing mb-4 d-lg-block d-none'>
            <h3 className='mb-3'>Pricing</h3>
            <div className="row">
                <div className="col-lg-9  pe-lg-2 pe-0">
                    <Input type={"number"} placeholder={"0"} />
                </div>
                <div className="col-lg-1   pe-0">
                    <Select options={[{ value: "$", label: "$" }]} />
                </div>
                <div className="col-lg-2  ps-lg-0 d-flex align-items-center">
                    <span className='mb-4 mx-lg-3  fs-4 text-primary'>/</span>
                    <Select options={[{ value: "Month", label: "Month" }]} />
                </div>
            </div>
        </div>
    )
}

export default Pricing