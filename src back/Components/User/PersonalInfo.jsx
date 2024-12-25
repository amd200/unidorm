import React from 'react'
import { Input } from '../Ui/Fields'

const PersonalInfo = () => {
    return (
        <div className='personal-info'>
            <h3 className='mb-3 sub-title'>Personal Information</h3>
            <div className="row">
                <div className="col-12">
                    <Input type={"text"} placeholder={"Name"} />
                </div>
                <div className="col-lg-6">
                    <Input type={"email"} placeholder={"Email"} />
                </div>
                <div className="col-lg-6">
                    <Input type={"number"} placeholder={"Phone Number"} />
                </div>
                <div className="col-12">
                    <Input type={"text"} placeholder={"Location"} />
                </div>
                <div className="col-lg-6">
                    <Input type={"text"} placeholder={"University"} />
                </div>
                <div className="col-lg-6">
                    <Input type={"text"} placeholder={"College Name"} />
                </div>
                <div className="col-12">
                    <Input type={"text"} placeholder={"College Name"} />
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo