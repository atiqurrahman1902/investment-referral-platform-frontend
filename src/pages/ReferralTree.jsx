import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/referral.css";

function ReferralTree() {
    return (
        <DashboardLayout title="Referral Program">

            {/* Referral Link */}
            <div className="referral-link-card">

                <h3>Your Referral Link</h3>

                <div className="link-box">
                    <input
                        type="text"
                        value="https://investment.com/ref/ATIQ123"
                        readOnly
                    />

                    <button
                        onClick={() =>
                            navigator.clipboard.writeText(
                                "https://investment.com/ref/ATIQ123"
                            )
                        }
                    >
                        Copy
                    </button>

                </div>

            </div>

            {/* Stats */}

            <div className="referral-stats">

                <div className="stat-box">
                    <h4>Total Referrals</h4>
                    <span>28</span>
                </div>

                <div className="stat-box">
                    <h4>Active Members</h4>
                    <span>18</span>
                </div>

                <div className="stat-box">
                    <h4>Commission Earned</h4>
                    <span>₹18,500</span>
                </div>

                <div className="stat-box">
                    <h4>Pending</h4>
                    <span>₹2,300</span>
                </div>

            </div>

            {/* Referral Table */}

            <div className="table-card">

                <div className="table-header">

                    <h3>Referral History</h3>

                    <input
                        type="text"
                        placeholder="Search member..."
                    />

                </div>

                <table>

                    <thead>

                        <tr>
                            <th>Name</th>
                            <th>Joined</th>
                            <th>Status</th>
                            <th>Investment</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Ahmed</td>
                            <td>Today</td>
                            <td><span className="active">Active</span></td>
                            <td>₹10,000</td>
                        </tr>

                        <tr>
                            <td>Rahul</td>
                            <td>Yesterday</td>
                            <td><span className="active">Active</span></td>
                            <td>₹15,000</td>
                        </tr>

                        <tr>
                            <td>John</td>
                            <td>2 Days Ago</td>
                            <td><span className="pending">Pending</span></td>
                            <td>₹0</td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </DashboardLayout>
    );
}

export default ReferralTree;