import { BrowserRouter, Routes, Route } from "react-router-dom";

// Authentication Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// Main Pages
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

        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Investment */}
        <Route path="/investment" element={<Investment />} />

        {/* Wallet */}
        <Route path="/wallet" element={<Wallet />} />

        {/* Referral Tree */}
        <Route path="/referral" element={<ReferralTree />} />

        {/* ROI History */}
        <Route path="/roi" element={<ROIHistory />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column",
              }}
            >
              <h1 style={{ fontSize: "70px", color: "#2563eb" }}>404</h1>
              <h2>Page Not Found</h2>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;