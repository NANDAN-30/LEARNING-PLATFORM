import React from 'react';

const About = () => (
  <div>
    {/* Hero Section */}
    <div className="jumbotron jumbotron-fluid bg-info text-white text-center py-5">
      <h1 className="display-4 animate__animated animate__fadeIn">About Learnify</h1>
      <p className="lead animate__animated animate__fadeIn animate__delay-1s">Your Learning Journey Starts Here</p>
    </div>

    {/* About Us Section */}
    <div className="container mt-5">
      <h2 className="text-center mb-4">Who We Are</h2>
      <div className="row">
        <div className="col-md-6">
          <p className="lead">
            At Learnify, we are passionate about empowering individuals to achieve their full potential. Our platform offers a wide range of online courses designed to help you grow both personally and professionally. From beginner-friendly lessons to advanced topics, our courses are designed to cater to all levels of expertise.
          </p>
        </div>
        <div className="col-md-6">
          <p className="lead">
            Whether you're looking to learn new skills for your career, explore a hobby, or transition to a new field, Learnify is here to support you. Our expert instructors, interactive content, and flexible learning options make it easier than ever to succeed in your educational journey.
          </p>
        </div>
      </div>
    </div>

    {/* Mission Section */}
    <div className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4">Our Mission</h2>
        <p className="lead mb-4">
          Our mission is to make learning accessible, engaging, and effective for everyone, everywhere. We strive to deliver high-quality educational content that not only equips students with knowledge but also builds confidence and critical thinking skills.
        </p>
        <p className="lead">
          We believe that education is the key to a better future, and we are committed to providing a platform where anyone can access the tools they need to succeed.
        </p>
      </div>
    </div>

    {/* Our Values Section */}
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Core Values</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow border-light">
            <div className="card-body text-center">
              <i className="fas fa-users fa-3x mb-3"></i>
              <h5 className="card-title">Community</h5>
              <p className="card-text">We believe in building a supportive community where learners can interact, share ideas, and grow together.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow border-light">
            <div className="card-body text-center">
              <i className="fas fa-chalkboard-teacher fa-3x mb-3"></i>
              <h5 className="card-title">Expert Instructors</h5>
              <p className="card-text">Our courses are taught by industry experts who bring practical knowledge and real-world experience to the classroom.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow border-light">
            <div className="card-body text-center">
              <i className="fas fa-laptop-code fa-3x mb-3"></i>
              <h5 className="card-title">Innovative Learning</h5>
              <p className="card-text">We use cutting-edge tools and interactive learning methods to make education engaging and effective.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="bg-info text-white text-center py-5">
      <h2>Start Your Journey with Learnify Today!</h2>
      <p className="lead mb-4">Join thousands of learners and discover the power of education at your fingertips.</p>
      <a href="/signup" className="btn btn-light btn-lg">Get Started</a>
    </div>
  </div>
);

export default About;
