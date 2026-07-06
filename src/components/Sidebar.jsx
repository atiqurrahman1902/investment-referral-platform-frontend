import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <div className="logo-circle">
          💼
        </div>

        <div>

          <h2>InvestPro</h2>

          <span>Referral Platform</span>

        </div>

      </div>

      <nav className="sidebar-menu">

        <NavLink to="/dashboard">
          🏠
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/investment">
          💰
          <span>Investment</span>
        </NavLink>

        <NavLink to="/wallet">
          💳
          <span>Wallet</span>
        </NavLink>

        <NavLink to="/referral">
          👥
          <span>Referral Tree</span>
        </NavLink>

        <NavLink to="/roi">
          📈
          <span>ROI History</span>
        </NavLink>

        <NavLink to="/profile">
          👤
          <span>Profile</span>
        </NavLink>

      </nav>

      <div className="sidebar-footer">

        <div className="premium-card">

          <h4>Premium Plan</h4>

          <p>
            Unlock advanced investment analytics.
          </p>

          <button>Upgrade</button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;