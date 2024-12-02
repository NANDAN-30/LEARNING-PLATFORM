import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="jumbotron jumbotron-fluid bg-info text-white text-center py-5">
        <h1 className="display-4 animate__animated animate__fadeIn">Welcome to Learnify</h1>
        <p className="lead animate__animated animate__fadeIn animate__delay-1s">Unlock your potential with online courses</p>
        <a href="/courses" className="btn btn-light btn-lg mt-3">Browse Courses</a>
      </div>

      {/* Featured Courses Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Featured Courses</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow border-light">
              <img src="https://th.bing.com/th/id/OIP.jZP8enDDRCcDzJ2PkXmYRwAAAA?rs=1&pid=ImgDetMain" className="card-img-top" alt="Course 1" />
              <div className="card-body">
                <h5 className="card-title">Web Development Bootcamp</h5>
                <p className="card-text">Learn the foundations of web development, including HTML, CSS, and JavaScript. Build dynamic websites from scratch.</p>
                <a href="/courses" className="btn btn-info">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-light">
              <img src="https://www.acquisition-international.com/wp-content/uploads/2022/12/Data-Science.jpg" className="card-img-top" alt="Course 2" />
              <div className="card-body">
                <h5 className="card-title">Data Science Masterclass</h5>
                <p className="card-text">Dive into the world of data analysis with Python, machine learning, and powerful data visualization tools.</p>
                <a href="/courses" className="btn btn-info">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-light">
              <img src="https://th.bing.com/th/id/OIP.HzlldSWChs5-9gKHz4sxdgHaEK?rs=1&pid=ImgDetMain" className="card-img-top" alt="Course 3" />
              <div className="card-body">
                <h5 className="card-title">Digital Marketing Essentials</h5>
                <p className="card-text">Master the art of digital marketing with courses on SEO, Google Ads, social media strategies, and more.</p>
                <a href="/courses" className="btn btn-info">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Why Choose Learnify?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="fas fa-graduation-cap fa-3x mb-3"></i>
              <h4>Expert Instructors</h4>
              <p>Our courses are taught by industry professionals with years of experience in their fields.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fas fa-laptop-code fa-3x mb-3"></i>
              <h4>Hands-on Learning</h4>
              <p>Get practical experience with projects and exercises that help you learn by doing.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fas fa-certificate fa-3x mb-3"></i>
              <h4>Accredited Certificates</h4>
              <p>Earn a certificate after completing each course, showcasing your skills to potential employers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">What Our Students Say</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow border-light">
              <div className="card-body text-center">
                <i className="fas fa-quote-left fa-2x mb-3"></i>
                <p className="card-text">"Learnify has been an amazing platform for my career growth. The courses are top-notch, and the instructors are so supportive!"</p>
                <h5 className="card-title">John Doe</h5>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-light">
              <div className="card-body text-center">
                <i className="fas fa-quote-left fa-2x mb-3"></i>
                <p className="card-text">"I took the Data Science Masterclass, and it completely transformed my understanding of the field. Highly recommend!"</p>
                <h5 className="card-title">Jane Smith</h5>
                <p>Data Analyst</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-light">
              <div className="card-body text-center">
                <i className="fas fa-quote-left fa-2x mb-3"></i>
                <p className="card-text">"The Digital Marketing Essentials course gave me all the tools I needed to grow my business online. Thank you, Learnify!"</p>
                <h5 className="card-title">Samuel Lee</h5>
                <p>Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-info text-white text-center py-5">
        <h2>Ready to Start Your Learning Journey?</h2>
        <p className="lead mb-4">Join thousands of learners who are transforming their lives with Learnify.</p>
        <a href="/signup" className="btn btn-light btn-lg">Sign Up Now</a>
      </div>
    </div>
  );
};

export default Home;
