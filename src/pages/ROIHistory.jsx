import "../styles/roi.css";

function ROIHistory() {
  return (
    <div className="roi-page">

      <div className="page-header">
        <h1>📈 ROI History</h1>
        <p>Track all your return on investments.</p>
      </div>

      {/* Top Cards */}

      <div className="roi-cards">

        <div className="roi-card">
          <h4>Total ROI</h4>
          <h2>₹0</h2>
        </div>

        <div className="roi-card">
          <h4>Today's ROI</h4>
          <h2>₹0</h2>
        </div>

        <div className="roi-card">
          <h4>Monthly ROI</h4>
          <h2>₹0</h2>
        </div>

        <div className="roi-card">
          <h4>Yearly ROI</h4>
          <h2>₹0</h2>
        </div>

      </div>

      {/* Filter */}

      <div className="roi-filter">

        <input type="date" />

        <input type="date" />

        <button>Search</button>

      </div>

      {/* ROI Table */}

      <div className="roi-table">

        <div className="table-title">

          <h2>ROI Transactions</h2>

        </div>

        <table>

          <thead>

            <tr>

              <th>Date</th>

              <th>Investment</th>

              <th>ROI %</th>

              <th>Amount</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td colSpan="5">

                No ROI History Found

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ROIHistory;