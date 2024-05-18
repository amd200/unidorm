import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Uitily/Header";
import HomePage from "./Pages/Home/HomePage";
import Footer from "./Components/Uitily/Footer";
import PropertiesPage from "./Pages/Properties/PropertiesPage";
import BookingPropertyPage from "./Pages/BookingProperty/BookingPropertyPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import DetailsPropertiesPage from "./Pages/DetailsProperties/DetailsPropertiesPage";
import React from "react";
import DashboardPage from "./Pages/User/DashboardPage";
import "react-notifications/lib/notifications.css";
import LoginPage from "./Pages/Auth/LoginPage";
import SignUpPage from "./Pages/Auth/SignUpPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import LandLordDashboardPage from "./Pages/Landlord/LandLordDashboardPage";
import LandLordAddPropertiesPage from "./Pages/Landlord/LandLordAddPropertiesPage";
import LandLordProfilePage from "./Pages/Landlord/LandLordProfilePage";
import UserRequsetsPage from "./Pages/User/UserRequsetsPage";
import LandLordBookingsPage from "./Pages/Landlord/LandLordBookingsPage";
import LandLordAddListingPage from "./Pages/Landlord/LandLordAddListingPage";
import UserWishlistPage from "./Pages/User/UserWishlistPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/properties" element={<PropertiesPage />}></Route>
        <Route  path="/bookingproperty"  element={<BookingPropertyPage />}></Route>
        <Route  path="/detailsproperties" element={<DetailsPropertiesPage />} ></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        {/* End Public Pages */}

        {/* Start User Pages */}
        <Route path="/user/dashboard" element={<DashboardPage />}></Route>
        <Route path="/user/profile" element={<UserProfilePage />}></Route>
        <Route path="/user/requests" element={<UserRequsetsPage />}></Route>
        <Route path="/user/wishlist" element={<UserWishlistPage />}></Route>
        {/* End User Pages */}

        {/* Start Admin Pages */}
        <Route path="/landlord" element={<LandLordDashboardPage />} ></Route>
        <Route path="/landlord/addlisting" element={<LandLordAddListingPage />}></Route>
        <Route path="/landlord/addproperty" element={<LandLordAddPropertiesPage />} ></Route>
        <Route path="/landlord/bookings" element={<LandLordBookingsPage />} ></Route>
        <Route  path="/landlord/profile" element={<LandLordProfilePage />}></Route>
        {/* End Admin Pages */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
