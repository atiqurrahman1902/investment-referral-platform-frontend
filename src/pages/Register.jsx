import {useState} from "react";

import API from "../services/api";


function Register(){



const [user,setUser]=useState({});



const handleRegister=async()=>{


try{


await API.post(

"/auth/register",

user

);



alert("Registration Successful");



}

catch(error){


alert("Registration Failed");


}


}



return(


<div className="form">


<h1>
Register
</h1>



<input

placeholder="Full Name"

onChange={(e)=>

setUser({

...user,

name:e.target.value

})

}


/>



<input

placeholder="Email"

onChange={(e)=>

setUser({

...user,

email:e.target.value

})

}


/>




<input

placeholder="Mobile"

onChange={(e)=>

setUser({

...user,

mobile:e.target.value

})

}


/>



<input

type="password"

placeholder="Password"

onChange={(e)=>

setUser({

...user,

password:e.target.value

})

}


/>




<input

placeholder="Referral Code"

onChange={(e)=>

setUser({

...user,

referralCode:e.target.value

})

}


/>



<button onClick={handleRegister}>

Register

</button>



</div>


)


}



export default Register;