import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";

import "../styles/sidebar.css";
import "../styles/topbar.css";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Topbar */}
        <Topbar />

        {/* Dashboard Body */}
        <div className="dashboard-body">

          {/* ================= HERO ================= */}

          <section className="hero">

            <div className="hero-content">

              <div className="hero-text">

                <span className="hero-badge">
                  🚀 Investment Dashboard
                </span>

                <h1>
                  Welcome Back, Atiq 👋
                </h1>

                <p>
                  Manage your investments, monitor ROI, track your referral
                  network and grow your earnings from one dashboard.
                </p>

                <div className="hero-info">

                  <div className="hero-item">
                    📅 {new Date().toLocaleDateString()}
                  </div>

                  <div className="hero-item">
                    🟢 Portfolio Active
                  </div>

                </div>

              </div>

              <div className="hero-action">

                <Link
                  to="/investment"
                  className="invest-btn"
                >
                  💰 New Investment
                </Link>

              </div>

            </div>

          </section>

          {/* ================= STATS ================= */}

          <section className="stats">

            <StatCard
              title="Wallet Balance"
              amount="₹0"
              subtitle="Available Balance"
              icon="💳"
              color="#2563eb"
            />

            <StatCard
              title="Total Investment"
              amount="₹0"
              subtitle="Active Investments"
              icon="💰"
              color="#16a34a"
            />

            <StatCard
              title="Total ROI"
              amount="₹0"
              subtitle="Lifetime Earnings"
              icon="📈"
              color="#7c3aed"
            />

            <StatCard
              title="Referral Income"
              amount="₹0"
              subtitle="Referral Earnings"
              icon="👥"
              color="#f97316"
            />

          </section>

          {/* ================= CHART & SUMMARY ================= */}

          <section className="dashboard-grid">

            <div className="dashboard-box">

              <div className="box-header">

                <h3>
                  📈 Investment Performance
                </h3>

              </div>

              <div className="chart-placeholder">

                <div>

                  <h1>📊</h1>

                  <p>Investment Chart</p>

                  <small>
                    Performance graph will appear after backend integration.
                  </small>

                </div>

              </div>

            </div>

            <div className="dashboard-box">

              <h3>
                💼 Portfolio Summary
              </h3>

              <ul className="summary-list">

                <li>
                  Total Plans
                  <span>0</span>
                </li>

                <li>
                  Active Plans
                  <span>0</span>
                </li>

                <li>
                  Referral Members
                  <span>0</span>
                </li>

                <li>
                  Monthly ROI
                  <span>₹0</span>
                </li>

              </ul>

            </div>

          </section>

          {/* ================= RECENT INVESTMENTS ================= */}

          <section className="dashboard-box">

            <div className="box-header">

              <h3>
                💰 Recent Investments
              </h3>

              <button className="view-btn">
                View All
              </button>

            </div>

            <table>

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Plan</th>

                  <th>Amount</th>

                  <th>Status</th>

                  <th>Date</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td colSpan="5">
                    No Investment Found
                  </td>

                </tr>

              </tbody>

            </table>

          </section>

          {/* ================= REFERRAL & ACTIVITY ================= */}

          <section className="dashboard-grid">

            <div className="dashboard-box">

              <h3>
                👥 Referral Tree
              </h3>

              <div className="empty-box">

                <h1>👥</h1>

                <p>No Referral Members</p>

              </div>

            </div>

            <div className="dashboard-box">

              <h3>
                ⚡ Recent Activity
              </h3>

              <div className="activity">

                <div className="activity-item">
                  ✔ Account Created
                </div>

                <div className="activity-item">
                  ✔ Wallet Activated
                </div>

                <div className="activity-item">
                  ✔ Ready For Investment
                </div>

              </div>

            </div>

          </section>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;