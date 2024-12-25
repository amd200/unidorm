import React, { useEffect, useRef } from 'react'
import { Input, Select } from '../Ui/Fields'
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");
function Pricing() {
    const priceRef = useRef();
    const dateRef = useRef();
    useEffect(() => {
        $(priceRef.current).niceSelect();
        $(dateRef.current).niceSelect();
    }, []);
    return (
        <div className='pricing mb-4 d-lg-block d-none'>
            <h3 className='mb-3'>Pricing</h3>
            <div className="row">
                <div className="col-lg-9  pe-lg-2 pe-0">
                    <Input type={"number"} placeholder={"0"} />
                </div>
                <div className="col-lg-1   pe-0">
                    <select className='wide' name="" ref={priceRef} id="">
                        <option value="$">$</option>
                    </select>
                </div>
                <div className="col-lg-2  ps-lg-0 d-flex align-items-center">
                    <span className='mb-4 mx-lg-3  fs-4 text-primary'>/</span>
                    <select className='wide' name="" ref={dateRef} id="">
                        <option value="Day">Day</option>
                        <option value="Week">Week</option>
                        <option value="Month">Month</option>
                        <option value="Year">Year</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Pricing