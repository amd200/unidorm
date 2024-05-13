import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import MenuProfile from '../../Components/User/MenuProfile'
import { Tag } from 'primereact/tag';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import RecentRequests from './RecentRequests';
import RecentBookings from './RecentBookings';
function Dashboard() {
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

export default Dashboard