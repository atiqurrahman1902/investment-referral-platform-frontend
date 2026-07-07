import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCoins,
  FaWallet,
  FaUsers,
  FaChartLine,
  FaUser,
  FaSignOutAlt,
  FaCrown,
} from "react-icons/fa";
import "../styles/sidebar.css";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const closeSidebar = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Investment",
      path: "/investment",
      icon: <FaCoins />,
    },
    {
      name: "Wallet",
      path: "/wallet",
      icon: <FaWallet />,
    },
    {
      name: "Referral",
      path: "/referral",
      icon: <FaUsers />,
    },
    {
      name: "ROI History",
      path: "/roi",
      icon: <FaChartLine />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>

      <div className="sidebar-logo">

        <div className="logo-circle">
          💼
        </div>

        <div className="logo-text">
          <h2>InvestPro</h2>
          <p>Investment Platform</p>
        </div>

      </div>

      <nav className="sidebar-nav">

        {menus.map((menu) => (

          <Link
            key={menu.path}
            to={menu.path}
            onClick={closeSidebar}
            className={
              location.pathname === menu.path
                ? "active"
                : ""
            }
          >
            <span className="menu-icon">
              {menu.icon}
            </span>

            <span className="menu-text">
              {menu.name}
            </span>

          </Link>

        ))}

      </nav>

      <div className="sidebar-footer">

        <div className="premium-card">

          <FaCrown className="premium-icon"/>

          <h3>Premium</h3>

          <p>
            Unlock premium investment features.
          </p>

          <button
            onClick={() => navigate("/investment")}
          >
            Upgrade
          </button>

        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >

          <FaSignOutAlt/>

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;