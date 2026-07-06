import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Investment from "./pages/Investment";
import Wallet from "./pages/Wallet";
import ReferralTree from "./pages/ReferralTree";
import ROIHistory from "./pages/ROIHistory";
import Profile from "./pages/Profile";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/investment" element={<Investment />} />

        <Route path="/wallet" element={<Wallet />} />

        <Route path="/referral" element={<ReferralTree />} />

        <Route path="/roi" element={<ROIHistory />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;