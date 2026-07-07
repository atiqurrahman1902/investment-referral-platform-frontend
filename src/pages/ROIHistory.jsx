import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/roi.css";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

const data = [
    { day: "Mon", roi: 350 },
    { day: "Tue", roi: 500 },
    { day: "Wed", roi: 450 },
    { day: "Thu", roi: 650 },
    { day: "Fri", roi: 580 },
    { day: "Sat", roi: 720 },
    { day: "Sun", roi: 690 },
];

const history = [
    {
        date: "07 Jul 2026",
        amount: "₹580",
        status: "Credited"
    },
    {
        date: "06 Jul 2026",
        amount: "₹520",
        status: "Credited"
    },
    {
        date: "05 Jul 2026",
        amount: "₹600",
        status: "Credited"
    },
    {
        date: "04 Jul 2026",
        amount: "₹490",
        status: "Pending"
    }
];

function ROIHistory() {

    return (

        <DashboardLayout title="ROI History">

            {/* Summary Cards */}

            <div className="roi-summary">

                <div className="roi-card">
                    <h4>Today's ROI</h4>
                    <h2>₹580</h2>
                </div>

                <div className="roi-card">
                    <h4>Monthly ROI</h4>
                    <h2>₹11,800</h2>
                </div>

                <div className="roi-card">
                    <h4>Total ROI</h4>
                    <h2>₹72,000</h2>
                </div>

                <div className="roi-card">
                    <h4>Pending Withdrawal</h4>
                    <h2>₹4,500</h2>
                </div>

            </div>

            {/* Chart */}

            <div className="chart-card">

                <h3>Weekly ROI Performance</h3>

                <ResponsiveContainer width="100%" height={350}>

                    <AreaChart data={data}>

                        <defs>

                            <linearGradient id="roiColor" x1="0" y1="0" x2="0" y2="1">

                                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />

                                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />

                            </linearGradient>

                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="day" />

                        <YAxis />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="roi"
                            stroke="#2563eb"
                            fillOpacity={1}
                            fill="url(#roiColor)"
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

            {/* History Table */}

            <div className="roi-table">

                <h3>ROI Transaction History</h3>

                <table>

                    <thead>

                        <tr>

                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {history.map((item, index) => (

                            <tr key={index}>

                                <td>{item.date}</td>

                                <td>{item.amount}</td>

                                <td>

                                    <span
                                        className={
                                            item.status === "Credited"
                                                ? "credited"
                                                : "pending"
                                        }
                                    >
                                        {item.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    );

}

export default ROIHistory;