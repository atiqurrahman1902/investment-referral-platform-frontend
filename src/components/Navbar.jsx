function Navbar({ logout }) {
  return (
    <header className="topbar">

      <div>

        <h1>Investment Dashboard</h1>

        <p>
          Welcome back! Here's today's investment overview.
        </p>

      </div>

      <div className="topbar-right">

        <button className="notification-btn">

          🔔

        </button>

        <div className="profile-box">

          <div className="avatar">

            A

          </div>

          <div>

            <h4>Atiq</h4>

            <span>Investor</span>

          </div>

        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </header>
  );
}

export default Navbar;