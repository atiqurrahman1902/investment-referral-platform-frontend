import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/wallet.css";

function Wallet() {

    return (

        <DashboardLayout title="Wallet">

            {/* ================= HERO ================= */}

            <section className="wallet-hero">

                <div>

                    <span className="wallet-badge">

                        💳 Secure Digital Wallet

                    </span>

                    <h1>

                        My Wallet

                    </h1>

                    <p>

                        Deposit funds, withdraw your earnings and
                        monitor every wallet transaction from one place.

                    </p>

                </div>

            </section>

            {/* ================= BALANCE ================= */}

            <section className="wallet-grid">

                <div className="wallet-card balance">

                    <h4>

                        Available Balance

                    </h4>

                    <h1>

                        ₹0

                    </h1>

                    <p>

                        Last Updated Today

                    </p>

                </div>

                <div className="wallet-card income">

                    <h4>

                        Total Income

                    </h4>

                    <h1>

                        ₹0

                    </h1>

                    <p>

                        Referral + ROI

                    </p>

                </div>

                <div className="wallet-card withdraw">

                    <h4>

                        Total Withdraw

                    </h4>

                    <h1>

                        ₹0

                    </h1>

                    <p>

                        Successfully Withdrawn

                    </p>

                </div>

            </section>

            {/* ================= ACTIONS ================= */}

            <section className="wallet-actions">

                <div className="action-card">

                    <h2>

                        Deposit Money

                    </h2>

                    <p>

                        Add funds to your wallet instantly.

                    </p>

                    <button>

                        Deposit

                    </button>

                </div>

                <div className="action-card">

                    <h2>

                        Withdraw Money

                    </h2>

                    <p>

                        Transfer your earnings directly to your bank.

                    </p>

                    <button>

                        Withdraw

                    </button>

                </div>

            </section>

            {/* ================= HISTORY ================= */}

            <section className="wallet-history">

                <div className="history-header">

                    <h2>

                        Transaction History

                    </h2>

                    <button>

                        View All

                    </button>

                </div>

                <div className="table-responsive">

                    <table>

                        <thead>

                            <tr>

                                <th>ID</th>

                                <th>Type</th>

                                <th>Amount</th>

                                <th>Status</th>

                                <th>Date</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td colSpan="5">

                                    No Transactions Found

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

        </DashboardLayout>

    );

}

export default Wallet;