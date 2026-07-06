import { Link, useLocation } from "react-router-dom";

function Sidebar() {

    const location = useLocation();

    return (

        <aside className="sidebar">

            <div className="logo">

                <div className="logo-icon">
                    💼
                </div>

                <div>

                    <h2>InvestPro</h2>

                    <p>Referral Platform</p>

                </div>

            </div>

            <nav className="menu">

                <Link
                    to="/dashboard"
                    className={location.pathname==="/dashboard" ? "active" : ""}
                >
                    🏠 Dashboard
                </Link>

                <Link
                    to="/investment"
                    className={location.pathname==="/investment" ? "active" : ""}
                >
                    💰 Investment
                </Link>

                <Link
                    to="/wallet"
                    className={location.pathname==="/wallet" ? "active" : ""}
                >
                    💳 Wallet
                </Link>

                <Link
                    to="/referral"
                    className={location.pathname==="/referral" ? "active" : ""}
                >
                    👥 Referral Tree
                </Link>

                <Link
                    to="/roi"
                    className={location.pathname==="/roi" ? "active" : ""}
                >
                    📈 ROI History
                </Link>

                <Link
                    to="/profile"
                    className={location.pathname==="/profile" ? "active" : ""}
                >
                    👤 Profile
                </Link>

            </nav>

            <div className="premium-card">

                <h3>Premium Plan</h3>

                <p>

                    Unlock advanced investment analytics.

                </p>

                <button>

                    Upgrade

                </button>

            </div>

        </aside>

    );

}

export default Sidebar;