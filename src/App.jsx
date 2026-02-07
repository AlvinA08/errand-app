import { Routes, Route, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Market from "./pages/Market";
import MarketList from "./pages/MarketList";
import MarketReview from "./pages/MarketReview";
import Delivery from "./pages/Delivery";
import DeliveryReview from "./pages/DeliveryReview";
import ScheduleDelivery from "./pages/ScheduleDelivery";
import DeliveryAddress from "./pages/DeliveryAddress";
import ErrandSummary from "./pages/ErrandSummary";
import Payment from "./pages/Payment";

import PickUp from "./pages/PickUp";
import OtherErrands from "./pages/OtherErrands";
import ErrandsHistory from "./pages/ErrandsHistory";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";

import SidebarLayout from "./components/SidebarLayout";

export default function App() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Authenticated */}
      <Route element={<SidebarLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/market" element={<Market />} />
        <Route path="/market/list" element={<MarketList />} />
        <Route path="/market/review" element={<MarketReview />} />

        <Route path="/delivery" element={<Delivery />} />
        <Route path="/delivery/review" element={<DeliveryReview />} />
        <Route path="/schedule-delivery" element={<ScheduleDelivery />} />
        <Route path="/delivery-address" element={<DeliveryAddress />} />

        <Route path="/pickup" element={<PickUp />} />
        <Route path="/other-errands" element={<OtherErrands />} />
        <Route path="/errands-history" element={<ErrandsHistory />} />

        <Route path="/errand-summary" element={<ErrandSummary />} />
        <Route path="/payment" element={<Payment />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
