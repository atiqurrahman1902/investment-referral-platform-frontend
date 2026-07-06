import { useState } from "react";
import "../styles/investment.css";

function Investment() {

    const [amount,setAmount]=useState("");

    const [plan,setPlan]=useState("Basic");

    const [duration,setDuration]=useState("1");

    const invest=(e)=>{

        e.preventDefault();

        alert("Investment Created Successfully");

    }

    return(

<div className="investment-page">

<div className="page-header">

<h1>💰 Create Investment</h1>

<p>

Start growing your wealth by investing in one of our plans.

</p>

</div>

<div className="investment-layout">

<div className="investment-form-card">

<h2>Create New Investment</h2>

<form onSubmit={invest}>

<label>Investment Amount</label>

<input
type="number"
placeholder="Enter Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
required
/>

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

<label>Duration</label>

<select
value={duration}
onChange={(e)=>setDuration(e.target.value)}
>

<option>1 Month</option>

<option>3 Months</option>

<option>6 Months</option>

<option>12 Months</option>

</select>

<button>

Invest Now

</button>

</form>

</div>

<div className="plan-card">

<h2>

Investment Benefits

</h2>

<div className="benefit">

✅ Daily ROI Distribution

</div>

<div className="benefit">

💰 Secure Investment

</div>

<div className="benefit">

👥 Referral Commission

</div>

<div className="benefit">

📈 Automatic ROI

</div>

<div className="benefit">

🏦 Withdraw Anytime

</div>

<div className="benefit">

🔒 Bank Level Security

</div>

</div>

</div>

<div className="plans">

<div className="plan">

<h3>Basic</h3>

<h2>5%</h2>

<p>Monthly ROI</p>

</div>

<div className="plan">

<h3>Silver</h3>

<h2>8%</h2>

<p>Monthly ROI</p>

</div>

<div className="plan">

<h3>Gold</h3>

<h2>12%</h2>

<p>Monthly ROI</p>

</div>

<div className="plan">

<h3>Diamond</h3>

<h2>18%</h2>

<p>Monthly ROI</p>

</div>

</div>

</div>

    )

}

export default Investment;