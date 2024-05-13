import React from 'react'
import { Input, Select } from '../Ui/Fields'

function Location() {
    return (
        <section className='location mb-4'>
            <h3 className='mb-3'>Location</h3>
            <div className="row">
                <div className="col-lg-6">
                    <Select options={[{ value: "Country", label: "Country" }]} />
                </div>
                <div className="col-lg-6">
                    <Input type={"text"} placeholder="States" />
                </div>
                <div className="col-lg-6">
                    <Input type={"text"} placeholder="Postal Code" />
                </div>
                <div className="col-lg-6">
                    <Input type={"text"} placeholder="Close To" />
                </div>
                <div className="col-12">
                    <Input type={"text"} placeholder="Address" />
                </div>
            </div>
        </section>
    )
}

export default Location