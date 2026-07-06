import { useState } from "react";
import "../styles/investment.css";

function Investment() {

  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("Basic");
  const [duration, setDuration] = useState("1");

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Investment Created Successfully");
  };

  return (
    <div className="investment-page">

      <div className="page-header">
        <h1>💰 Create Investment</h1>
        <p>
          Start growing your wealth by choosing an investment plan.
        </p>
      </div>

      <div className="investment-card">

        <form onSubmit={submitHandler}>

          <div className="form-group">
            <label>Investment Amount</label>

            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
            />
          </div>

          <div className="form-group">

            <label>Select Plan</label>

            <select
              value={plan}
              onChange={(e)=>setPlan(e.target.value)}
            >
              <option>Basic</option>
              <option>Silver</option>
              <option>Gold</option>
              <option>Diamond</option>
            </select>

          </div>

          <div className="form-group">

            <label>Investment Duration</label>

            <select
              value={duration}
              onChange={(e)=>setDuration(e.target.value)}
            >
              <option value="1">1 Month</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
            </select>

          </div>

          <div className="roi-box">

            <div>

              <span>Expected ROI</span>

              <h2>₹500</h2>

            </div>

            <div>

              <span>Plan</span>

              <h2>{plan}</h2>

            </div>

          </div>

          <button className="submit-btn">

            🚀 Invest Now

          </button>

        </form>

      </div>

    </div>
  );

}

export default Investment;