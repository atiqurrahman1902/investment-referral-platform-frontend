import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../styles/dashboardLayout.css";

function DashboardLayout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-layout">

      {/* Overlay (Mobile Only) */}
      <div
        className={`overlay ${sidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Wrapper */}
      <div className="main-wrapper">

        {/* Topbar */}
        <Topbar
          title={title}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page Content */}
        <main className="dashboard-content">
          <div className="dashboard-body">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;