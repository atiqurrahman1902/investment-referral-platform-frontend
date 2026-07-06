import "../styles/wallet.css";

function Wallet() {
  return (
    <div className="wallet-page">

      <div className="page-header">
        <h1>💳 Wallet</h1>
        <p>
          Track your wallet balance, earnings and withdrawals.
        </p>
      </div>

      <div className="wallet-cards">

        <div className="wallet-card blue">

          <div>
            <h4>Wallet Balance</h4>
            <h2>₹0</h2>
            <p>Available Balance</p>
          </div>

          <span>💳</span>

        </div>

        <div className="wallet-card green">

          <div>
            <h4>Total Earnings</h4>
            <h2>₹0</h2>
            <p>Lifetime Income</p>
          </div>

          <span>💰</span>

        </div>

        <div className="wallet-card orange">

          <div>
            <h4>Total Withdraw</h4>
            <h2>₹0</h2>
            <p>Withdrawn Amount</p>
          </div>

          <span>🏦</span>

        </div>

      </div>

      <div className="wallet-grid">

        <div className="wallet-box">

          <h3>Recent Transactions</h3>

          <table>

            <thead>

              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>

                <td colSpan="4">

                  No Transactions Found

                </td>

              </tr>

            </tbody>

          </table>

        </div>

        <div className="wallet-box">

          <h3>Quick Actions</h3>

          <button className="wallet-btn">

            💵 Withdraw Money

          </button>

          <button className="wallet-btn">

            📥 Deposit

          </button>

          <button className="wallet-btn">

            📄 Statement

          </button>

        </div>

      </div>

    </div>
  );
}

export default Wallet;