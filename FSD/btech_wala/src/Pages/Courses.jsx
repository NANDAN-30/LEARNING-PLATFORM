import React from 'react';

const Courses = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="jumbotron jumbotron-fluid bg-primary text-white text-center py-5">
        <h1 className="display-4">Explore Our Courses</h1>
        <p className="lead">Find the perfect course to kickstart your learning journey</p>
      </div>

      {/* Filters Section */}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <h4>Filter by Category</h4>
            <select className="form-control">
              <option>All Categories</option>
              <option>Web Development</option>
              <option>Data Science</option>
              <option>Digital Marketing</option>
              <option>Graphic Design</option>
            </select>
          </div>
          <div className="col-md-6">
            <h4>Sort by</h4>
            <select className="form-control">
              <option>Latest</option>
              <option>Popularity</option>
              <option>Price</option>
            </select>
          </div>
        </div>
      </div>

      {/* Courses List */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Top Courses</h2>
        <div className="row">
          {/* Course 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img src="https://th.bing.com/th/id/OIP.jZP8enDDRCcDzJ2PkXmYRwAAAA?rs=1&pid=ImgDetMain" className="card-img-top" alt="Web Development Bootcamp" />
              <div className="card-body">
                <h5 className="card-title">Web Development Bootcamp</h5>
                <p className="card-text">Master HTML, CSS, JavaScript, and build real-world projects with hands-on practice.</p>
                <a href="/course-details/1" className="btn btn-primary">View Course</a>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img src="https://www.acquisition-international.com/wp-content/uploads/2022/12/Data-Science.jpg" className="card-img-top" alt="Data Science Masterclass" />
              <div className="card-body">
                <h5 className="card-title">Data Science Masterclass</h5>
                <p className="card-text">Learn Python, machine learning, and data visualization to analyze and predict data trends.</p>
                <a href="/course-details/2" className="btn btn-primary">View Course</a>
              </div>
            </div>
          </div>

          {/* Course 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img src="https://th.bing.com/th/id/OIP.HzlldSWChs5-9gKHz4sxdgHaEK?rs=1&pid=ImgDetMain" className="card-img-top" alt="Digital Marketing Essentials" />
              <div className="card-body">
                <h5 className="card-title">Digital Marketing Essentials</h5>
                <p className="card-text">Learn SEO, social media marketing, Google Ads, and more to grow your business online.</p>
                <a href="/course-details/3" className="btn btn-primary">View Course</a>
              </div>
            </div>
          </div>

          {/* Course 4 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img src="https://www.trainingforweb.co.uk/wp-content/uploads/2015/10/graphic-design-courses.jpg" className="card-img-top" alt="Graphic Design for Beginners" />
              <div className="card-body">
                <h5 className="card-title">Graphic Design for Beginners</h5>
                <p className="card-text">Start your design journey with Photoshop and Illustrator, and create stunning visuals.</p>
                <a href="/course-details/4" className="btn btn-primary">View Course</a>
              </div>
            </div>
          </div>

          {/* Course 5 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img src="https://blogct.creative-tim.com/blog/content/images/2022/07/UX-design-courses.jpg" className="card-img-top" alt="UI/UX Design Bootcamp" />
              <div className="card-body">
                <h5 className="card-title">UI/UX Design Bootcamp</h5>
                <p className="card-text">Learn user interface and experience design, from wireframing to prototyping.</p>
                <a href="/course-details/5" className="btn btn-primary">View Course</a>
              </div>
            </div>
          </div>

          {/* Course 6 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img src="https://www.saintleo.edu/sites/default/files/2022-09/cybersecurity-training.jpg" className="card-img-top" alt="Cybersecurity for Beginners" />
              <div className="card-body">
                <h5 className="card-title">Cybersecurity for Beginners</h5>
                <p className="card-text">Understand the basics of cybersecurity and protect networks and systems from cyber threats.</p>
                <a href="/course-details/6" className="btn btn-primary">View Course</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="container text-center my-5">
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Courses;
