import React from 'react';
import MenuProfile from '../../Components/User/MenuProfile'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import RecentRequests from '../../Components/User/RecentRequests';
import RecentBookings from '../../Components/User/RecentBookings';
function DashboardPage() {
    return (
        <div className="dashboard-page py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 mb-lg-0 mb-5">
                        <MenuProfile />
                    </div>
                    <div className="col-lg-10 d-flex flex-column gap-5">
                        <RecentRequests />
                        <RecentBookings />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage