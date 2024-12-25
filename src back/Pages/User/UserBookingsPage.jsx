import React from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import RecentBookings from '../../Components/User/RecentBookings';
import { SecondaryBtn } from '../../Components/Ui/Buttons';
import MenuProfile from '../../Components/User/MenuProfile';
function UserBookingsPage() {
    return (
        <div className="dashboard-page py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 mb-lg-0 mb-5">
                        <MenuProfile />
                    </div>
                    <div className="col-lg-10 d-flex flex-column gap-5">
                        <SecondaryBtn customClass={"ms-auto"} title={"Add Listing"} />
                        <RecentBookings />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBookingsPage