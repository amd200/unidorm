import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Uitily/Header";
import HomePage from "./Pages/Home/HomePage";
import Footer from "./Components/Uitily/Footer";
import LoginPage from "./Pages/Login/LoginPage";
import SignUpPage from "./Pages/SignUp/SignUpPage";
import ProfilePage from "./Pages/User/ProfilePage";
import PropertiesPage from "./Pages/Properties/PropertiesPage";
import BookingPropertyPage from "./Pages/BookingProperty/BookingPropertyPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Pages/NotFound/NotFound";
import DetailsProperties from "./Pages/DetailsProperties/DetailsProperties";
import React from "react";
import AddProperties from "./Pages/Landlord/AddProperties";
import AddListing from "./Pages/Landlord/AddListing";
import Dashboard from "./Pages/User/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/user" >
          <Route path="profileuser" element={<ProfilePage />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route path="/landlord" >
          <Route path="addproperty" element={<AddProperties />}></Route>
          <Route path="addlisting" element={<AddListing />}></Route>
        </Route>
        <Route path="/properties" element={<PropertiesPage />}></Route>
        <Route  path="/bookingproperty" element={<BookingPropertyPage />}></Route>
        <Route path="/detailsproperties"element={<DetailsProperties />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
