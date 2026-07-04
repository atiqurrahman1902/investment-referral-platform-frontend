import {

LineChart,

Line,

XAxis,

YAxis,

CartesianGrid,

Tooltip

}

from "recharts";



const data=[

{
name:"Jan",
roi:100
},

{
name:"Feb",
roi:200
},

{
name:"Mar",
roi:300
}

];



function Chart(){


return(


<LineChart

width={600}

height={300}

data={data}

>


<CartesianGrid/>

<XAxis dataKey="name"/>

<YAxis/>


<Tooltip/>


<Line

dataKey="roi"

/>


</LineChart>


)


}


export default Chart;