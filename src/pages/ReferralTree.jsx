import "../styles/referral.css";

function ReferralTree() {
  return (
    <div className="referral-page">

      <div className="page-header">

        <h1>👥 Referral Network</h1>

        <p>
          Manage your direct and indirect referral members.
        </p>

      </div>

      {/* Top Cards */}

      <div className="referral-stats">

        <div className="ref-card">

          <h4>Total Members</h4>

          <h2>0</h2>

        </div>

        <div className="ref-card">

          <h4>Direct Referrals</h4>

          <h2>0</h2>

        </div>

        <div className="ref-card">

          <h4>Team Business</h4>

          <h2>₹0</h2>

        </div>

        <div className="ref-card">

          <h4>Referral Income</h4>

          <h2>₹0</h2>

        </div>

      </div>

      {/* Tree */}

      <div className="tree-card">

        <h2>Your Referral Tree</h2>

        <div className="tree-area">

          <div className="tree-user">

            👤

            <h4>You</h4>

            <p>REF123456</p>

          </div>

          <div className="tree-line"></div>

          <div className="empty-node">

            ➕

            <p>No Referral Yet</p>

          </div>

        </div>

      </div>

      {/* Recent Referrals */}

      <div className="recent-referrals">

        <h2>Recent Members</h2>

        <table>

          <thead>

            <tr>

              <th>Name</th>

              <th>Referral ID</th>

              <th>Joining Date</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td colSpan="4">

                No Referral Members

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ReferralTree;