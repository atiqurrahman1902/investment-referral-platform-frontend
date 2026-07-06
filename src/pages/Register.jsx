import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    referralCode: "",
  });

  const handleRegister = async () => {

    try {

      await API.post("/auth/register", user);

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      alert(error.response?.data?.message || "Registration Failed");

    }

  };

  return (

    <div className="form">

      <h1>Create Account</h1>

      <input
        placeholder="Full Name"
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setUser({
            ...user,
            email: e.target.value,
          })
        }
      />

      <input
        placeholder="Mobile"
        onChange={(e) =>
          setUser({
            ...user,
            mobile: e.target.value,
          })
        }
      />

      <div className="password-box">

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />

        <span
          className="eye"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁"}
        </span>

      </div>

      <input
        placeholder="Referral Code (Optional)"
        onChange={(e) =>
          setUser({
            ...user,
            referralCode: e.target.value,
          })
        }
      />

      <button onClick={handleRegister}>
        Register
      </button>

      <p className="bottom-text">
        Already have an account?
        <Link to="/"> Login</Link>
      </p>

    </div>

  );

}

export default Register;