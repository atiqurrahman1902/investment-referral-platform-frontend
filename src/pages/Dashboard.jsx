import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import InvestmentChart from "../components/InvestmentChart";
import PortfolioSummary from "../components/PortfolioSummary";
import RecentInvestments from "../components/RecentInvestments";
import ReferralCard from "../components/ReferralCard";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="dashboard-main">

                <Navbar logout={logout} />

                <div className="dashboard-body">

                    {/* Hero */}

                    <div className="hero">

                        <div>

                            <h1>

                                👋 Welcome Back

                            </h1>

                            <p>

                                Here's what's happening with your investment
                                portfolio today.

                            </p>

                        </div>

                        <button className="invest-btn">

                            + New Investment

                        </button>

                    </div>

                    {/* Cards */}

                    <DashboardCards />

                    {/* Row 1 */}

                    <div className="dashboard-grid">

                        <InvestmentChart />

                        <PortfolioSummary />

                    </div>

                    {/* Row 2 */}

                    <RecentInvestments />

                    {/* Row 3 */}

                    <div className="dashboard-grid">

                        <ReferralCard />

                        <RecentActivity />

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;