import React, { useState } from "react";
import "./Loginpage.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Loginpage = () => {
  const [signState, setsignState] = useState("sign-in");
  const [name, setname] = useState(""); 
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const user_auth = async (e) => {
    e.preventDefault();
    setloading(true);
    if (signState === "sign-in") {  
      await login(email, password);    
    } else { 
      await signup(name, email, password);
    }
    setloading(false);
  };

  return (
    loading ? <div className="loading-screen">
      <img src={netflix_spinner} alt="Loading..." />
    </div> :
    <div className="login-page">
      <div className="card">
        <img src={logo} alt="Logo" className="login-logo" />
        <form className="sigin-form" onSubmit={user_auth}>
          <h2>{signState}</h2>
          {signState === "sign-up" ? (
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setname(e.target.value)} 
              placeholder="Enter your name" 
            />
          ) : null}
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setemail(e.target.value)} 
            placeholder="Email or phone number" 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setpassword(e.target.value)} 
            placeholder="Password" 
          />
          <button type="submit">{signState}</button>

          <div className="from-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="swith-accounts">
          {signState === "sign-in" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setsignState("sign-up")}>Sign up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setsignState("sign-in")}>Sign in Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
