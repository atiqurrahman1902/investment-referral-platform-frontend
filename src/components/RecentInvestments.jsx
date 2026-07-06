function RecentInvestments() {

    return (

        <div className="box">

            <div className="box-header">

                <h3>

                    💰 Recent Investments

                </h3>

                <button>

                    View All

                </button>

            </div>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Amount</th>

                        <th>ROI</th>

                        <th>Status</th>

                        <th>Date</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td
                            colSpan="5"
                        >

                            No Investments Available

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    );

}

export default RecentInvestments;