import "../styles/profile.css";

function Profile() {

    return (

        <div className="profile-page">

            <div className="page-header">

                <h1>👤 My Profile</h1>

                <p>

                    Manage your account information.

                </p>

            </div>

            <div className="profile-container">

                {/* Left */}

                <div className="profile-card">

                    <div className="profile-avatar">

                        A

                    </div>

                    <h2>

                        Atiq Ur Rahman

                    </h2>

                    <p>

                        Premium Investor

                    </p>

                    <button>

                        Change Photo

                    </button>

                </div>

                {/* Right */}

                <div className="profile-details">

                    <h2>

                        Personal Information

                    </h2>

                    <div className="profile-grid">

                        <div>

                            <label>

                                Full Name

                            </label>

                            <input
                                value="Atiq Ur Rahman"
                                readOnly
                            />

                        </div>

                        <div>

                            <label>

                                Email

                            </label>

                            <input
                                value="atiq@gmail.com"
                                readOnly
                            />

                        </div>

                        <div>

                            <label>

                                Mobile

                            </label>

                            <input
                                value="9876543210"
                                readOnly
                            />

                        </div>

                        <div>

                            <label>

                                Referral Code

                            </label>

                            <input
                                value="REF123456"
                                readOnly
                            />

                        </div>

                    </div>

                    <button className="save-btn">

                        Save Changes

                    </button>

                </div>

            </div>

        </div>

    );

}

export default Profile;