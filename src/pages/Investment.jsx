import { useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";



function Investment(){


const [form,setForm]=useState({

amount:"",

plan:"Basic",

dailyROI:"1"

});




const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};




const submitInvestment = async(e)=>{


e.preventDefault();



try{


const response = await API.post(

"/investment/create",

form

);



alert(
"Investment created successfully"
);



console.log(response.data);



}


catch(error){


console.log(error);


alert(
"Investment failed"
);


}



};





return(

<div>


<Navbar/>


<div className="form">


<h1>
Create Investment
</h1>



<form onSubmit={submitInvestment}>


<input

type="number"

name="amount"

placeholder="Investment Amount"

value={form.amount}

onChange={handleChange}

/>



<input

type="text"

name="plan"

placeholder="Plan Name"

value={form.plan}

onChange={handleChange}

/>



<input

type="number"

name="dailyROI"

placeholder="Daily ROI %"

value={form.dailyROI}

onChange={handleChange}

/>



<button>

Invest

</button>



</form>


</div>


</div>

)


}



export default Investment;