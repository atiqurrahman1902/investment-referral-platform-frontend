import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";

function Register() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({

        fullName: "",

        email: "",

        mobile: "",

        password: "",

        confirmPassword: "",

        referralCode: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if(formData.password !== formData.confirmPassword){

            alert("Passwords do not match");

            return;

        }

        alert("Registration Successful");

        navigate("/login");

    };

    return(

        <div className="register-page">

            <div className="register-card">

                <div className="register-title">

                    <h1>InvestPro</h1>

                    <p>Create Your Investment Account</p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-row">

                        <div className="form-group">

                            <label>Full Name</label>

                            <input

                                type="text"

                                name="fullName"

                                placeholder="John Doe"

                                value={formData.fullName}

                                onChange={handleChange}

                                required

                            />

                        </div>

                        <div className="form-group">

                            <label>Mobile Number</label>

                            <input

                                type="text"

                                name="mobile"

                                placeholder="9876543210"

                                value={formData.mobile}

                                onChange={handleChange}

                                required

                            />

                        </div>

                    </div>

                    <div className="form-group">

                        <label>Email Address</label>

                        <input

                            type="email"

                            name="email"

                            placeholder="Enter Email"

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

                                placeholder="Enter Password"

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

                    <div className="form-group">

                        <label>Confirm Password</label>

                        <div className="password-box">

                            <input

                                type={showConfirmPassword ? "text" : "password"}

                                name="confirmPassword"

                                placeholder="Confirm Password"

                                value={formData.confirmPassword}

                                onChange={handleChange}

                                required

                            />

                            <button

                                type="button"

                                className="eye-btn"

                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}

                            >

                                {showConfirmPassword ? "🙈" : "👁"}

                            </button>

                        </div>

                    </div>

                    <div className="form-group">

                        <label>Referral Code (Optional)</label>

                        <input

                            type="text"

                            name="referralCode"

                            placeholder="Referral Code"

                            value={formData.referralCode}

                            onChange={handleChange}

                        />

                    </div>

                    <button

                        className="register-btn"

                        type="submit"

                    >

                        Create Account

                    </button>

                </form>

                <div className="register-footer">

                    Already have an account?

                    {" "}

                    <Link to="/login">

                        Login Here

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Register;