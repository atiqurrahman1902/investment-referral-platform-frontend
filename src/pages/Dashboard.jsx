import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import { getMyInvestments } from "../services/api";

import "../styles/dashboard.css";

function Dashboard() {

    const [investments, setInvestments] = useState([]);

    const [loading, setLoading] = useState(true);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

        loadInvestments();

    }, []);

    const loadInvestments = async () => {

        try {

            const res = await getMyInvestments();

            setInvestments(res.data);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };

    const totalInvestment = investments.reduce(

        (sum, item) => sum + item.amount,

        0

    );

    const totalROI = investments.reduce(

        (sum, item) => sum + item.dailyROI,

        0

    );

    const activePlans = investments.filter(

        item => item.status === "Active"

    ).length;

    return (

        <DashboardLayout title="Dashboard">            {/* ==========================================
               HERO
            ========================================== */}

            <section className="hero">

                <div className="hero-content">

                    <div className="hero-text">

                        <span className="hero-badge">

                            🚀 Investment Dashboard

                        </span>

                        <h1>

                            Welcome Back, {user?.name || "Investor"} 👋

                        </h1>

                        <p>

                            Manage your investments, monitor ROI,
                            track referrals and grow your wealth
                            from one dashboard.

                        </p>

                        <div className="hero-info">

                            <div className="hero-item">

                                📅 {new Date().toLocaleDateString()}

                            </div>

                            <div className="hero-item">

                                🟢 Portfolio Active

                            </div>

                        </div>

                    </div>

                    <div className="hero-action">

                        <Link
                            to="/investment"
                            className="invest-btn"
                        >

                            💰 New Investment

                        </Link>

                    </div>

                </div>

            </section>

            {/* ==========================================
               STATS
            ========================================== */}

            <section className="stats">

                <StatCard

                    title="Wallet Balance"

                    amount={`₹${user?.walletBalance || 0}`}

                    subtitle="Available Balance"

                    icon="💳"

                    color="#2563eb"

                />

                <StatCard

                    title="Total Investment"

                    amount={`₹${totalInvestment}`}

                    subtitle="Invested Amount"

                    icon="💰"

                    color="#16a34a"

                />

                <StatCard

                    title="Total ROI"

                    amount={`${totalROI}%`}

                    subtitle="Daily ROI"

                    icon="📈"

                    color="#7c3aed"

                />

                <StatCard

                    title="Active Plans"

                    amount={activePlans}

                    subtitle="Running Investments"

                    icon="📦"

                    color="#f97316"

                />

            </section>

            {/* ==========================================
               GRID
            ========================================== */}

            <section className="dashboard-grid">

                <div className="dashboard-box">

                    <div className="box-header">

                        <h3>

                            📈 Investment Performance

                        </h3>

                    </div>

                    <div className="chart-placeholder">

                        <div>

                            <h1>

                                📊

                            </h1>

                            <p>

                                Investment Analytics

                            </p>

                            <small>

                                Chart will appear after backend integration.

                            </small>

                        </div>

                    </div>

                </div>

                <div className="dashboard-box">

                    <h3>

                        💼 Portfolio Summary

                    </h3>

                    <ul className="summary-list">

                        <li>

                            Total Plans

                            <span>

                                {investments.length}

                            </span>

                        </li>

                        <li>

                            Active Plans

                            <span>

                                {activePlans}

                            </span>

                        </li>

                        <li>

                            Total Investment

                            <span>

                                ₹{totalInvestment}

                            </span>

                        </li>

                        <li>

                            Daily ROI

                            <span>

                                {totalROI}%

                            </span>

                        </li>

                    </ul>

                </div>

            </section>            {/* ==========================================
               RECENT INVESTMENTS
            ========================================== */}

            <section className="dashboard-box">

                <div className="box-header">

                    <h3>

                        💰 Recent Investments

                    </h3>

                    <Link
                        to="/investment"
                        className="view-btn"
                    >

                        View All

                    </Link>

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

                                <th>Date</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                loading ? (

                                    <tr>

                                        <td colSpan="6">

                                            Loading Investments...

                                        </td>

                                    </tr>

                                ) : investments.length > 0 ? (

                                    investments.map((item,index)=>(

                                        <tr key={item._id}>

                                            <td>

                                                {index+1}

                                            </td>

                                            <td>

                                                {item.plan}

                                            </td>

                                            <td>

                                                ₹{item.amount}

                                            </td>

                                            <td>

                                                {item.dailyROI}%

                                            </td>

                                            <td>

                                                {item.status}

                                            </td>

                                            <td>

                                                {

                                                    new Date(item.createdAt)

                                                    .toLocaleDateString()

                                                }

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td colSpan="6">

                                            No Investments Found

                                        </td>

                                    </tr>

                                )

                            }

                        </tbody>

                    </table>

                </div>

            </section>

            {/* ==========================================
               REFERRAL & ACTIVITY
            ========================================== */}

            <section className="dashboard-grid">

                <div className="dashboard-box">

                    <h3>

                        👥 Referral Tree

                    </h3>

                    <div className="empty-box">

                        <h1>

                            👥

                        </h1>

                        <p>

                            Referral Members will appear here.

                        </p>

                    </div>

                </div>

                <div className="dashboard-box">

                    <h3>

                        ⚡ Recent Activity

                    </h3>

                    <div className="activity">

                        {

                            investments.length > 0 ? (

                                investments.slice(0,5).map((item)=>(

                                    <div

                                        className="activity-item"

                                        key={item._id}

                                    >

                                        ✔ Invested ₹{item.amount} in {item.plan} Plan

                                    </div>

                                ))

                            ) : (

                                <div className="activity-item">

                                    ✔ No Recent Activity

                                </div>

                            )

                        }

                    </div>

                </div>

            </section>

        </DashboardLayout>

    );

}

export default Dashboard;