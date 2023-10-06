import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="holder">
      <div className="Login-Container">
        <p>LOGIN</p>
        <form action="">
          <div className="email-div">
            <label htmlFor="email" className="">
              Email address
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-div">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`fa-regular toggle-password ${
                showPassword ? 'fa-eye' : 'fa-eye-slash'
              }`}
              id="togglepass"
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <div className="end-login">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <span>forget password ?</span>
          </div>
          <div className="btn-div">
            <button className="login-btn">Login</button>
          </div>
          <div className="last-form">
            <p>Not Registered ?</p>
            <p className="red-form-txt">Click Here To Join</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
