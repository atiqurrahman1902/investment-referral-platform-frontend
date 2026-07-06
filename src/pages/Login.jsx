import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        // Temporary Login

        localStorage.setItem("token", "demo-user");

        navigate("/dashboard");

    };

    return (

        <div className="login-page">

            <div className="login-card">

                <div className="login-title">

                    <h1>InvestPro</h1>

                    <p>Login to your Investment Account</p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Email Address</label>

                        <input

                            type="email"

                            name="email"

                            placeholder="Enter your email"

                            value={formData.email}

                            onChange={handleChange}

                            required

                        />

                    </div>

                    <div className="form-group">

                        <label>Password</label>

                        <div className="password-box">

                            <input

                                type={showPassword ? "text" : "password"}

                                name="password"

                                placeholder="Enter password"

                                value={formData.password}

                                onChange={handleChange}

                                required

                            />

                            <button

                                type="button"

                                className="eye-btn"

                                onClick={() => setShowPassword(!showPassword)}

                            >

                                {showPassword ? "🙈" : "👁"}

                            </button>

                        </div>

                    </div>

                    <button

                        className="login-btn"

                        type="submit"

                    >

                        Login

                    </button>

                </form>

                <div className="login-footer">

                    Don't have an account?

                    {" "}

                    <Link to="/register">

                        Register Now

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Login;