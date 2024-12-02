import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-in logic here (e.g., form validation, API call)
    alert('Sign In submitted!');
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-4">
          {/* Sign-In Card */}
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h2 className="text-center mb-4 font-weight-bold">Sign In</h2>
            <p className="text-center mb-4 text-muted">Welcome back! Please sign in to continue.</p>
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="form-group">
                <label htmlFor="email" className="font-weight-medium">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-group">
                <label htmlFor="password" className="font-weight-medium">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>

              {/* Sign-In Button */}
              <button type="submit" className="btn btn-primary btn-block btn-lg py-2">
                Sign In
              </button>
            </form>

            {/* Forgot Password and Sign-Up Link */}
            <div className="text-center mt-3">
              <p>
                <a href="/forgot-password" className="text-decoration-none text-muted">Forgot Password?</a>
              </p>
              <p>
                Don't have an account? <a href="/signup" className="text-decoration-none text-primary">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
