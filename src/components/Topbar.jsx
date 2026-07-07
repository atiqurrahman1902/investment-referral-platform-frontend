import {
  FaBars,
  FaBell,
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

import "../styles/topbar.css";

function Topbar({ title, setSidebarOpen }) {

  return (

    <header className="topbar">

      {/* Left */}

      <div className="topbar-left">

        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(true)}
        >

          <FaBars />

        </button>

        <h2>{title}</h2>

      </div>

      {/* Search */}

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search..."
        />

      </div>

      {/* Right */}

      <div className="topbar-right">

        <div className="notification">

          <FaBell />

          <span>3</span>

        </div>

        <div className="profile-box">

          <FaUserCircle className="profile-icon"/>

          <div>

            <h4>Atiq</h4>

            <p>Investor</p>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Topbar;