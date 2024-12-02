import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-up logic here (e.g., form validation, API call)
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert('Sign Up submitted!');
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-4">
          {/* Sign-Up Card */}
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h2 className="text-center mb-4 font-weight-bold">Create Account</h2>
            <p className="text-center mb-4 text-muted">Join our platform to start learning today!</p>
            <form onSubmit={handleSubmit}>
              {/* Username Input */}
              <div className="form-group">
                <label htmlFor="username" className="font-weight-medium">Username</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

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
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password Input */}
              <div className="form-group">
                <label htmlFor="confirmPassword" className="font-weight-medium">Confirm Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsAndConditions"
                  required
                />
                <label className="form-check-label" htmlFor="termsAndConditions">
                  I agree to the <a href="/terms" className="text-decoration-none">terms and conditions</a>
                </label>
              </div>

              {/* Sign-Up Button */}
              <button type="submit" className="btn btn-primary btn-block btn-lg py-2">
                Create Account
              </button>
            </form>

            {/* Already have an account? Link */}
            <div className="text-center mt-3">
              <p>
                Already have an account? <a href="/signin" className="text-decoration-none text-primary">Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
