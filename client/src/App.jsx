import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import Mybookings from "./pages/Mybookings";
import HotelRegistration from "./components/HotelRegistration";
import Layout from "./pages/hotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import Title from "./components/Title";
import ListRoom from "./pages/hotelOwner/ListRoom";
import AddRoom from "./pages/hotelOwner/AddRoom";
import {Toaster} from 'react-hot-toast';
import { ToastContainer } from "react-toastify";
import { useAppContext } from "./context/appContext";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const {showHotelReg} = useAppContext();

  return (
    <div>
      <Toaster/>
      <ToastContainer/>
      {!isOwnerPath && <Navbar />}
      { showHotelReg && <HotelRegistration />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<Mybookings />} />
          
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard/>}/>
            <Route path="add-room" element={<AddRoom/>}/> 
            <Route  path="list-room" element={<ListRoom/>}/>
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
