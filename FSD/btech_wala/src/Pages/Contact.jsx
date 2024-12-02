import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="jumbotron jumbotron-fluid bg-info text-white text-center py-5">
        <h1 className="display-4 animate__animated animate__fadeIn">Contact Us</h1>
        <p className="lead animate__animated animate__fadeIn animate__delay-1s">We'd love to hear from you</p>
      </div>

      {/* Contact Form Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <div className="row">
          <div className="col-md-8">
            <form>
              <div className="form-group">
                <label for="name">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-info btn-block">Send Message</button>
            </form>
          </div>
          <div className="col-md-4">
            <h3 className="mb-4">Contact Details</h3>
            <ul className="list-unstyled">
              <li><i className="fas fa-phone-alt mr-3"></i><strong>Phone:</strong> +123 456 789</li>
              <li><i className="fas fa-envelope mr-3"></i><strong>Email:</strong> support@learnify.com</li>
              <li><i className="fab fa-facebook-f mr-3"></i><strong>Facebook:</strong> @Learnify</li>
              <li><i className="fab fa-twitter mr-3"></i><strong>Twitter:</strong> @Learnify</li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
      {/* Call to Action Section */}
      <div className="bg-info text-white text-center py-5">
        <h2>We're Here to Help!</h2>
        <p className="lead mb-4">If you have any questions or need assistance, feel free to reach out to us!</p>
        <a href="mailto:support@learnify.com" className="btn btn-light btn-lg">Contact Support</a>
      </div>
    </div>
  );
};

export default Contact;
