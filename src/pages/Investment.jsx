import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/investment.css";

function Investment() {

    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        alert(`Investment of ₹${amount} submitted successfully.`);

        setAmount("");

    };

    return (

        <DashboardLayout title="Investment">

            <div className="investment-page">

                {/* ================= HERO ================= */}

                <section className="investment-hero">

                    <div>

                        <span className="hero-tag">
                            💰 Investment Portal
                        </span>

                        <h1>
                            Grow Your Wealth
                        </h1>

                        <p>
                            Invest in our secure plans and earn monthly returns
                            with complete transparency.
                        </p>

                    </div>

                </section>

                {/* ================= PLANS ================= */}

                <h2 className="section-title">

                    Investment Plans

                </h2>

                <div className="plans-grid">

                    <div className="plan-card">

                        <h3>🥉 Silver Plan</h3>

                        <h1>₹5,000</h1>

                        <p>5% Monthly ROI</p>

                        <ul>

                            <li>✔ Daily ROI Updates</li>

                            <li>✔ Secure Investment</li>

                            <li>✔ Referral Bonus</li>

                        </ul>

                        <button>
                            Select Plan
                        </button>

                    </div>

                    <div className="plan-card active">

                        <span className="popular">
                            MOST POPULAR
                        </span>

                        <h3>🥈 Gold Plan</h3>

                        <h1>₹25,000</h1>

                        <p>7% Monthly ROI</p>

                        <ul>

                            <li>✔ Higher Returns</li>

                            <li>✔ Priority Support</li>

                            <li>✔ Referral Income</li>

                        </ul>

                        <button>
                            Select Plan
                        </button>

                    </div>

                    <div className="plan-card">

                        <h3>🥇 Platinum Plan</h3>

                        <h1>₹1,00,000</h1>

                        <p>10% Monthly ROI</p>

                        <ul>

                            <li>✔ Maximum ROI</li>

                            <li>✔ VIP Support</li>

                            <li>✔ Exclusive Rewards</li>

                        </ul>

                        <button>
                            Select Plan
                        </button>

                    </div>

                </div>

                {/* ================= FORM ================= */}

                <div className="investment-form-card">

                    <h2>
                        Invest Now
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label>
                                Investment Amount
                            </label>

                            <input

                                type="number"

                                placeholder="Enter amount"

                                value={amount}

                                onChange={(e)=>setAmount(e.target.value)}

                                required

                            />

                        </div>

                        <button

                            type="submit"

                            className="invest-submit"

                        >

                            💰 Confirm Investment

                        </button>

                    </form>

                </div>

                {/* ================= HISTORY ================= */}

                <div className="investment-history">

                    <div className="history-header">

                        <h2>

                            Recent Investments

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

                                    <th>Plan</th>

                                    <th>Amount</th>

                                    <th>ROI</th>

                                    <th>Status</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td colSpan="5">

                                        No Investments Found

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Investment;