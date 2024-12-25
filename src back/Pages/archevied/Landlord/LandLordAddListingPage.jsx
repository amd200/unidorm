import React from 'react'
import MenuProfile from '../../Components/LandLord/MenuProfile'
import AddImgsProperties from '../../Components/LandLord/AddImgsProperties'
import AddVideosProperties from '../../Components/LandLord/AddVideosProperties '
import BasicInfo from '../../Components/LandLord/BasicInfo'
import Location from '../../Components/LandLord/Location'
import Pricing from '../../Components/LandLord/Pricing'
import Facilities from '../../Components/LandLord/Facilities'

function LandLordAddListingPage() {
    return (
        <div className='addListing-page'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <MenuProfile />
                    </div>
                    <div className="col-lg-10">
                        <AddImgsProperties />
                        <AddVideosProperties />
                        <BasicInfo />
                        <Location />
                        <Pricing />
                        <Facilities />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandLordAddListingPage