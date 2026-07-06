import { useNavigate } from "react-router-dom";

function Topbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    return (

        <header className="topbar">

            <div className="topbar-left">

                <h2>Investment Dashboard</h2>

                <p>Welcome back! Here's today's investment overview.</p>

            </div>

            <div className="topbar-right">

                <div className="notify">
                    🔔
                </div>

                <div className="user-box">

                    <div className="avatar">
                        A
                    </div>

                    <div className="user-info">

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

export default Topbar;