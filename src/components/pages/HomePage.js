import React from 'react';
import './homepage.css';
import Jew4 from '../images/Jew4.jpg'
import { Link } from 'react-router-dom';
import Community from '../images/Community.jpg'

function HomePage() {
  return (
    <div>
      {/* <!-- Header--> */}
      <header class="header"> {/* Apply the header class */}
  <div class="container px-4 text-center">
    <h1 class="fw-bolder">Welcome to Family of Yahweh</h1>
    <p class="lead">Join us in our mission to spread love, unity, and faith in the community.</p>
    <a class="btn btn-lg btn-light" href="#about">Learn More</a>
  </div>
</header>



      <section id="about" style={{ marginBottom: '40px' }}>
  <div class="container px-4">
    <div class="row gx-4 justify-content-center">
      <div class="col-lg-12">
        <div class="border-bottom border-primary mb-4 pb-3">
          <h2 class="text-primary">About Family of YAHWEH</h2>
        </div>
      </div>
      <div class="col-lg-6">
        <img
          src={Jew4}
          alt="About Us"
          class="img-fluid"
        />
      </div>
      <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center">
        <p class="lead">
          Welcome to the Family of YAHWEH, a community dedicated to spiritual growth, learning, and fellowship. Our journey is rooted in ancient traditions and guided by modern values.
        </p>
        <p>
          We believe in embracing diversity, fostering unity, and seeking wisdom. Join us to explore the richness of our traditions and the depth of our spirituality.
        </p>
        <Link to="/about" class="btn btn-primary mt-3">Learn More</Link>
      </div>
    </div>
  </div>
</section>



<section id="community-outreach" style={{ marginBottom: '40px' }}>
  <div class="container px-4">
    <div class="row gx-4 justify-content-center">
      <div class="col-lg-12">
        <div class="border-bottom border-primary mb-4 pb-3">
          <h2 class="text-primary">Community and Outreach</h2>
        </div>
      </div>
      
      <div class="col-lg-6 d-flex flex-column justify-content-center">
        <p class="lead">
          At the Family of YAHWEH, we are deeply committed to serving and supporting our local community. Our mission extends beyond the walls of our church, and we actively engage in outreach programs to make a positive impact.
        </p>
        <p>
          Our dedicated team works tirelessly to help those in need, promote social justice, and provide a helping hand to those facing challenges.
        </p>
        <p>
          Whether it's through food drives, educational initiatives, or community events, we believe in making a difference in the lives of our neighbors. Join us in our journey to serve and uplift our community.
        </p>
      </div>

      <div class="col-lg-6">
        <img
          src={Community}  // Replace with the URL of your community and outreach image
          alt="Community Outreach"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</section>



{/* <!-- Contact section--> */}
<section id="contact" style={{ marginBottom: '40px' }}>
  <div class="container px-4">
    <div class="row gx-4 justify-content-center">
      <div class="col-lg-12">
        <div class="border-bottom border-primary mb-4 pb-3">
          <h2 class="text-primary">Contact Us</h2>
        </div>
      </div>
      <div class="col-lg-8">
        <p class="lead">Feel free to reach out to us. You can use the form below to send us a message, and we'll get back to you as soon as possible.</p>
        
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" name="name" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>

            <input type="email" class="form-control" id="email" name="email" required />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default HomePage;
