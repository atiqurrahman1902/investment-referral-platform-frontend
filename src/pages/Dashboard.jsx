import {useEffect,useState} from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";

import Card from "../components/Card";

import Table from "../components/Table";

import Chart from "../components/Chart";



function Dashboard(){


const [data,setData]=useState({});



useEffect(()=>{


API.get("/dashboard")

.then(res=>{


setData(res.data);


})


.catch(err=>{


console.log(err);


});


},[]);




return(

<div>


<Navbar/>


<h1>
Dashboard
</h1>



<div className="cards">


<Card

title="Total Investment"

value={data.totalInvestment || 0}

/>



<Card

title="Wallet Balance"

value={data.walletBalance || 0}

/>



<Card

title="Total ROI"

value={data.totalROI || 0}

/>



<Card

title="Level Income"

value={data.levelIncome || 0}

/>



</div>



<Chart/>


<Table/>



</div>


)

}


export default Dashboard;