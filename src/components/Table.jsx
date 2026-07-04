import {useEffect,useState} from "react";

import API from "../services/api";



function Table(){


const [data,setData]=useState([]);




useEffect(()=>{


API.get("/investment/my")

.then(res=>{


setData(res.data);


});


},[]);



return(


<table>


<thead>

<tr>

<th>Amount</th>

<th>Plan</th>

<th>ROI</th>

<th>Status</th>

</tr>

</thead>



<tbody>


{

data.map((item)=>(


<tr key={item._id}>


<td>
{item.amount}
</td>


<td>
{item.plan}
</td>


<td>
{item.dailyROI}%
</td>


<td>
{item.status}
</td>


</tr>



))


}



</tbody>


</table>


)


}


export default Table;