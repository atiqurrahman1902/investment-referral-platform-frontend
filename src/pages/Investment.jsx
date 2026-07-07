import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { createInvestment } from "../services/api";
import "../styles/investment.css";

function Investment() {

    const [amount, setAmount] = useState("");

    const [selectedPlan, setSelectedPlan] = useState("");

    const [loading, setLoading] = useState(false);

    const getDailyROI = (plan) => {

        switch (plan) {

            case "Silver":
                return 1;

            case "Gold":
                return 2;

            case "Platinum":
                return 3;

            default:
                return 1;

        }

    };

    const selectPlan = (plan, price) => {

        setSelectedPlan(plan);

        setAmount(price);

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!selectedPlan) {

            alert("Please select an investment plan.");

            return;

        }

        try {

            setLoading(true);

            const response = await createInvestment({

                amount: Number(amount),

                plan: selectedPlan,

                dailyROI: getDailyROI(selectedPlan)

            });

            alert(response.data.message);

            setAmount("");

            setSelectedPlan("");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Investment Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <DashboardLayout title="Investment">

            <div className="investment-page">

                {/* HERO */}

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

                {/* PLANS */}

                <h2 className="section-title">

                    Investment Plans

                </h2>

                <div className="plans-grid">

                    <div className={`plan-card ${selectedPlan === "Silver" ? "active" : ""}`}>

                        <h3>🥉 Silver Plan</h3>

                        <h1>₹5,000</h1>

                        <p>5% Monthly ROI</p>

                        <ul>

                            <li>✔ Daily ROI Updates</li>

                            <li>✔ Secure Investment</li>

                            <li>✔ Referral Bonus</li>

                        </ul>

                        <button
                            onClick={() => selectPlan("Silver", 5000)}
                        >

                            {selectedPlan === "Silver" ? "Selected" : "Select Plan"}

                        </button>

                    </div>

                    <div className={`plan-card ${selectedPlan === "Gold" ? "active" : ""}`}>

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

                        <button
                            onClick={() => selectPlan("Gold", 25000)}
                        >

                            {selectedPlan === "Gold" ? "Selected" : "Select Plan"}

                        </button>

                    </div>

                    <div className={`plan-card ${selectedPlan === "Platinum" ? "active" : ""}`}>

                        <h3>🥇 Platinum Plan</h3>

                        <h1>₹1,00,000</h1>

                        <p>10% Monthly ROI</p>

                        <ul>

                            <li>✔ Maximum ROI</li>

                            <li>✔ VIP Support</li>

                            <li>✔ Exclusive Rewards</li>

                        </ul>

                        <button
                            onClick={() => selectPlan("Platinum", 100000)}
                        >

                            {selectedPlan === "Platinum" ? "Selected" : "Select Plan"}

                        </button>

                    </div>

                </div>

                {/* FORM */}

                <div className="investment-form-card">

                    <h2>

                        Invest Now

                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label>

                                Selected Plan

                            </label>

                            <input

                                type="text"

                                value={selectedPlan}

                                readOnly

                                placeholder="Select a plan"

                            />

                        </div>

                        <div className="form-group">

                            <label>

                                Investment Amount

                            </label>

                            <input

                                type="number"

                                value={amount}

                                readOnly

                            />

                        </div>

                        <button

                            type="submit"

                            className="invest-submit"

                            disabled={loading}

                        >

                            {

                                loading

                                    ? "Processing..."

                                    : "💰 Confirm Investment"

                            }

                        </button>

                    </form>

                </div>

                {/* HISTORY */}

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

                                        Investment history will appear after backend integration.

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