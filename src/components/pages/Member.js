import React from 'react';
import { Link } from 'react-router-dom';
import './member.css';
import wamama from '../images/wamama.jpg';
import wazee from '../images/wazee.jpg';
import kids from '../images/kids.jpg';
import Yout from '../images/Yout.jpg'

function Member() {
  const headerStyle = {
    background: 'url("https://images.unsplash.com/photo-1480561807109-e2aa33f23be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 123, 255, 0.5)',
    height: '400px',
    textAlign: 'center',
    color: 'white',
    borderBottom: '2px solid blue', // Blue border at the bottom
  };

  const sectionHeaderStyle = {
    borderBottom: '2px solid blue', // Blue border at the bottom of each section header
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div>
      {/* Header */}
      <header style={headerStyle}>
        <div className="container px-4 text-center">
          <h1 className="fw-bolder">Welcome to Family of Yahweh</h1>
          <p className="lead">
            Join us in our mission to spread love, unity, and faith in the community.
          </p>
          <Link to="/about" className="btn btn-lg btn-light">
            Learn More
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section id="about" style={{ marginBottom: '40px' }}>
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            
            <div className="col-lg-6">
              <h2 className="text-primary" style={sectionHeaderStyle}>About Family of YAHWEH</h2>
              <p className="lead">
                Welcome to the Family of YAHWEH, a community dedicated to spiritual growth, learning, and fellowship.
                Our journey is rooted in ancient traditions and guided by modern values.
              </p>
              <p>
                We believe in embracing diversity, fostering unity, and seeking wisdom. Join us to explore the richness of
                our traditions and the depth of our spirituality.
              </p>
              <Link to="/about" className="btn btn-primary mt-3">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="men" style={{ marginBottom: '40px' }}>
  <div class="container px-4">
    <div class="row gx-4 justify-content-center">
      <div class="col-lg-12">
        <div class="border-bottom border-primary mb-4 pb-3">
          <h2 class="text-primary">Men's Ministry</h2>
        </div>
      </div>
      
      <div class="col-lg-6 d-flex flex-column justify-content-center">
        <p class="lead">
          Join our men's ministry to grow in faith and brotherhood.
        </p>
        <p>
          "Be watchful, stand firm in the faith, act like men, be strong." – 1 Corinthians 16:13
        </p>
      </div>

      <div class="col-lg-6">
        <img
          src={wazee} // Replace with the URL of your men's ministry image
          alt="Men's Ministry"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</section>

<section id="women" style={{ marginBottom: '40px' }}>
  <div class="container px-4">
    <div class="row gx-4 justify-content-center">
      <div class="col-lg-12">
        <div class="border-bottom border-primary mb-4 pb-3">
          <h2 class="text-primary">Women's Ministry</h2>
        </div>
      </div>
      
      <div class="col-lg-6 d-flex flex-column justify-content-center">
        <p class="lead">
          Join our women's ministry to find support and sisterhood.
        </p>
        <p>
          "Charm is deceitful, and beauty is vain, but a woman who fears the Lord is to be praised." – Proverbs 31:30
        </p>
      </div>

      <div class="col-lg-6">
        <img
          src={wamama} // Replace with the URL of your women's ministry image
          alt="Women's Ministry"
          class="img-fluid"
          style={{ height: '300px' , ms:'8px' }} 
        />
      </div>
    </div>
  </div>
</section>


<section id="children" style={{ marginBottom: '40px' }}>
  <div className="container px-4">
    <div className="row gx-4 justify-content-center">
      <div className="col-lg-12">
        <div className="border-bottom border-primary mb-4 pb-3">
          <h2 className="text-primary">Children's Ministry</h2>
        </div>
      </div>

      <div className="col-lg-6">
        <img
          src={kids} // Replace with the URL of your children's ministry image
          alt="Children's Ministry"
          style={{ height: '300px' }} // Set your desired height here
        />
      </div>

      <div className="col-lg-6 d-flex flex-column justify-content-center">
        <p className="lead">
          Our children's ministry provides a nurturing environment for kids to grow in faith.
        </p>
        <p>
          "Train up a child in the way he should go; even when he is old he will not depart from it." – Proverbs 22:6
        </p>
      </div>
    </div>
  </div>
</section>


<section id="youth" style={{ marginBottom: '40px' }}>
  <div className="container px-4">
    <div className="row gx-4 justify-content-center">
      <div className="col-lg-12">
        <div className="border-bottom border-primary mb-4 pb-3">
          <h2 className="text-primary">Youth Ministry</h2>
        </div>
      </div>

      <div className="col-lg-6">
        <img
          src={Yout} // Replace with the URL of your youth ministry image
          alt="Youth Ministry"
          className="img-fluid"
          style={{ height: '400px', width: 'auto'}}
        />
      </div>

      <div className="col-lg-6 d-flex flex-column justify-content-center">
        <p className="lead">
          Our youth ministry is dedicated to inspiring and guiding the next generation.
        </p>
        <p>
          "Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity." – 1 Timothy 4:12
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Member;
