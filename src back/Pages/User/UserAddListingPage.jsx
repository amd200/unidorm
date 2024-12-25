    import React from 'react'
import MenuProfile from '../../Components/User/MenuProfile'
import AddImgsProperties from '../../Components/User/AddImgsProperties'
import AddVideosProperties from '../../Components/User/AddVideosProperties '
import BasicInfo from '../../Components/User/BasicInfo'
import Location from '../../Components/User/Location'
import Pricing from '../../Components/User/Pricing'
import Facilities from '../../Components/User/Facilities'

function UserAddListingPage() {
    return (
        <div className='addListing-page py-5'>
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

export default UserAddListingPage