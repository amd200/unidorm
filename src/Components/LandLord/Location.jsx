import React, { useEffect, useRef } from 'react'
import { Input, Select } from '../Ui/Fields'
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");
function Location() {
    const countryRef = useRef();
    useEffect(() => {
        $(countryRef.current).niceSelect();
    }, []);
    return (
        <section className='location mb-4'>
            <h3 className='mb-3'>Location</h3>
            <div className="row">
                <div className="col-lg-6">
                    <select ref={countryRef} name="" className='wide' id="">
                        <option value="Country">Country</option>
                    </select>
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