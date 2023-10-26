import React from 'react';
import './donation.css';
import support from '../images/support.jpg';
import empower from '../images/empower.jpeg';
import good from '../images/good.avif';
import salvador from '../images/Salvador.jpg';
import BaRiyah from '../images/BaRiyah.jpg';
import singer from '../images/singer.jpg';
import hands from '../images/hands.avif';
import help from '../images/help.avif';

function Donation() {
  const headerStyle = {
    backgroundImage: `url(${hands})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  };

  const sectionStyle = {
    backgroundImage: `url(${help})`,
    paddingTop: '9rem',
    paddingBottom: '9rem',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    backgroundPosition: 'center center'
  };

  return (
    <div>
      <header className="masthead" style={headerStyle}>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">Support Our Mission</h1>
                <div className="contact-info">
                  <p>For inquiries and support:</p>
                  <p>
                    <i className="fas fa-phone"></i> Call us at:{' '}
                    <a href="tel:+123456789">+(254)720 315726</a>
                  </p>
                  <p>
                    <i className="fas fa-envelope"></i> Email us at:{' '}
                    <a href="mailto:info@example.com">foy@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="features-icons bg-light text-center" style={{ paddingTop: '9rem', paddingBottom: '9rem' }}>
        <div className="container">
        <div className="showcase-header">
          <h2 style={{ marginBottom: '5px' }}>Ongoing Projects</h2>
        </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                  <i className="fas fa-landmark m-auto text-primary"></i>
                </div>
                <h3>Support Our Land Purchase</h3>
                <p className="lead mb-0">
                  We are embarking on a mission to purchase land within Nairobi to expand our ministry.
                  Your generous donations will help us acquire the land we need for our projects and community outreach.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                  <i className="fas fa-church m-auto text-primary"></i>
                </div>
                <h3>Support Gospel Outreach</h3>
                <p className="lead mb-0">
                  Our mission includes spreading the gospel far and wide. Your donations will help us
                  reach more people with the message of faith and love.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                  <i className="fas fa-hands-helping m-auto text-primary"></i>
                </div>
                <h3>Help the Needy</h3>
                <p className="lead mb-0">
                  Your contributions will also go towards supporting those in need within our community.
                  Together, we can make a positive impact and provide assistance to those facing challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <div className="container">
  <section className="showcase" style={{ paddingTop: '9rem', paddingBottom: '9rem' }}>
    <div className="showcase-header">
      <h2 style={{ marginBottom: '5px' }}>Why to Donate</h2>
    </div>
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-lg-6 order-lg-1 my-auto showcase-text" style={{ marginBottom: '20px' }}>
          <h2>Supporting Our Ministry</h2>
          <p className="lead mb-0">By donating, you help us expand our ministry's reach and impact. Your generous contributions empower us to spread the message of faith and love to a broader audience.</p>
        </div>
        <div className="col-lg-6">
          <img
            src={support}
            alt="Supporting Our Ministry"
            className="img-fluid"
            style={{ height: '400px', width: 'auto' }}
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-6 my-auto showcase-text" style={{ marginBottom: '20px' }}>
          <h2>Empowering Change</h2>
          <p className="lead mb-0">Your donations support projects that bring about positive change within our community. We believe in making a difference in the lives of our neighbors by providing assistance to those facing challenges.</p>
        </div>
        <div className="col-lg-6">
          <img
            src={good}
            alt="Empowering Change"
            className="img-fluid"
            style={{ height: '400px', width: 'auto' }}
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-6" style={{ marginBottom: '20px' }}>
          <img
            src={empower}
            alt="Making an Impact"
            className="img-fluid"
            style={{ height: '400px', width: 'auto' }}
          />
        </div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text" style={{ marginBottom: '20px' }}>
          <h2>Making an Impact</h2>
          <p className="lead mb-0">With your help, we can achieve our mission and create a better world. Your contributions play a vital role in supporting our initiatives and projects. Join us in making a positive impact today!</p>
        </div>
      </div>
    </div>
  </section>
</div>


    

<section className="testimonials text-center bg-light" style={{ paddingTop: '9rem', paddingBottom: '9rem' }}>
  <div className="container">
    <h2 className="mb-5">Our Project Leaders</h2>
    <div className="row">
      <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
          <img className="img-fluid rounded-circle mb-3" src={singer} alt="Jecinta W." style={{ width: '100px', height: '100px' }} />
          <h5>Jecinta W.</h5>
          <p className="font-weight-light mb-0">"We are dedicated to acquiring land for our ministry's growth. Your generous contributions make this vision a reality. Join us in making a lasting impact!"</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
          <img className="img-fluid rounded-circle mb-3" src={salvador} alt="Salvador" style={{ width: '100px', height: '100px' }} />
          <h5>Salvador</h5>
          <p className="font-weight-light mb-0">"With your support, we can extend our outreach and touch more lives. Your contributions empower us to share the message of faith and love with a broader audience. Be part of this transformative journey!"</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
          <img className="img-fluid rounded-circle mb-3" src={BaRiyah} alt="Geoffrey K." style={{ width: '100px', height: '100px' }} />
          <h5>Geoffrey K.</h5>
          <p className="font-weight-light mb-0">"Your contributions go a long way in supporting those in need and helping us create a better world. We're grateful for your generosity and invite you to be part of our mission. Together, we can make a significant impact!"</p>
        </div>
      </div>
    </div>
  </div>
</section>



 
<section className="call-to-action text-white text-center" id="contact" style={sectionStyle}>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">Need Assistance? Contact Us!</h2>
              <div className="contact-info">
                <p><i className="fas fa-phone"></i> Call our Support Team at: <a href="tel:+123456789">+ (254)720 315726</a></p>
                <p><i className="fas fa-envelope"></i> Email us at: <a href="mailto:info@example.com">foy@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Donation;
