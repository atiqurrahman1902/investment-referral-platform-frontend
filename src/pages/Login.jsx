import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Password Show/Hide
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {

    try {

      const response = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert(error.response?.data?.message || "Invalid Login");

    }

  };

  return (

    <div className="form">

      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="password-box">

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <span
          className="eye"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁"}
        </span>

      </div>

      <button onClick={handleLogin}>
        Login
      </button>

      <p className="bottom-text">
        Don't have an account?
        <Link to="/register"> Sign Up</Link>
      </p>

    </div>

  );

}

export default Login;