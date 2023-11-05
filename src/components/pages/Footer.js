import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="text-white text-center text-lg-start bg-primary">
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Family of Yahweh</h5>
              <p>
              "Join our ever-growing community and be a part of a place where faith meets harmony, and love knows no bounds.
              
               Embrace the warmth of togetherness and discover the joy of worshiping together
              </p>
              <p>
              Start your journey with us today and experience the beauty of faith and unity. We welcome you to the Family of Yahweh - where love, peace, and spiritual growth flourish."
              </p>
              <div className="mt-4">
                <a href="#" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-dribbble"></i></a>
                <a href="#" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-twitter"></i></a>
                <a href="#" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-google-plus-g"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">Contact US</h5>
              <ul className="fa-ul" style={{ marginLeft: '1.85em' }}>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Kenya, Nairobi, Dandora</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">foy@gmail.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2"><span>Wanyoike ,</span>+254 720 315 726</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2"><span>Charagu ,</span>+254724 417121</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Opening hours</h5>
              <table className="table text-center text-white">
                <thead>
                  <tr>
                    <th>Services</th> {/* Empty header cell */}
                    <th>Day</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody className="font-weight-normal">
                  <tr>
                    <td>Shabbat Service</td>
                    <td>Saturday</td>
                    <td>9am - 5pm</td>
                  </tr>
                  <tr>
                    <td>Choir Service</td>
                    <td>Saturday</td>
                    <td>4pm - 6pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          Family of Yahweh
          <a className="text-white" href="https://mdbootstrap.com/">website.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
