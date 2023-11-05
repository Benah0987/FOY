import React from 'react';
import './about.css'
import BaRiyah4 from '../images/BaRiyah4.jpg'
import Wanyoike from '../images/Wanyoike.jpg'
import Moses from '../images/Moses.jpg'

function About() {
  const jumbotronStyle = {
    backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")',
    height: '400px', // Increase the height as desired
    margin: '40px auto 40px', // Add margin to prevent hugging the left and right parts and more margin from the top
    padding: '20px', // Add padding for spacing inside
    textAlign: 'center', // Center the text
    
  }
  const cardContainerStyle = {
    marginTop: '100px',
  };
  
  const cardColStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const sectionStyle = {
    padding: '40px 0',
    overflow: 'hidden',
    background: '#fff',
    marginBottom: '20px', // Adding margin-bottom to sections
  };

  const cardData = [
    {
      image: BaRiyah4,
      name: 'Geoffrey KImama',
      role: 'Pastor',
      place: 'Nyahururu Branch',

    },

    {
      image: Wanyoike,
      name: 'Wanyoike Kimama',
      role: 'Pastor ',
      place: 'Nairobi Branch'
    },
    {
      image: Moses,
      name: 'Moses',
      role: 'Leader',
      place: 'Nyahururu Branch'
    },
  ];
  return (
    <div>
      <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel" style={sectionStyle}>
  {/* Indicators */}
  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  {/* Inner */}
  <div className="carousel-inner">
    {/* Single item */}
    <div className="carousel-item active">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
        className="d-block w-100"
        alt="Sunset Over the City"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Family of Yahweh</h5>
        <p>Welcome to the Family of Yahweh, a place of peace and love.</p>
      </div>
    </div>

    {/* Single item */}
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
        className="d-block w-100"
        alt="Canyon at Night"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Our Community</h5>
        <p>We gather to worship and celebrate our faith in the Family of Yahweh.</p>
      </div>
    </div>

    {/* Single item */}
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
        className="d-block w-100"
        alt="Cliff Above a Stormy Sea"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>United in Faith</h5>
        <p>Join us as we grow together in the love of Yahweh and our community.</p>
      </div>
    </div>
  </div>
  {/* Inner */}

  {/* Controls */}
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      {/* vision, mission, beliefs */}
      <div className="container bootstrap snippets bootdeys" style={sectionStyle}>

      <h2 className="text-center">Our Beliefs</h2>
      <div className="row">
        <div className="col-md-4 col-sm-6 content-card">
          <div className="card-big-shadow">
            <div
              className="card card-just-text"
              data-background="color"
              data-color="blue"
              data-radius="none"
            >
              <div className="content">
                <h6 className="category">Vision</h6>
                <h4 className="title">Vision Statement</h4>
                <p className="description">
                  Our vision is to bring the light of Yahweh into every heart and home, guiding
                  our community towards spiritual growth and salvation. "Yahweh is my shepherd;
                  I shall not want." - Psalm 23:1
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 content-card" >
          <div className="card-big-shadow">
            <div
              className="card card-just-text"
              data-background="color"
              data-color="green"
              data-radius="none"
            >
              <div className="content">
                <h6 className="category">Mission</h6>
                <h4 className="title">Mission Statement</h4>
                <p className="description">
                  Our mission is to spread the teachings of Yahweh, sharing His love, grace, and
                  wisdom with all. "Go therefore and make disciples of all nations." - Matthew 28:19
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 content-card">
          <div className="card-big-shadow">
            <div
              className="card card-just-text"
              data-background="color"
              data-color="yellow"
              data-radius="none"
            >
              <div className="content">
                <h6 className="category">Belief</h6>
                <h4 className="title">Statement of Belief</h4>
                <p className="description">
                  We believe in the one true God, Yahweh, the Creator of all things, and His
                  everlasting love for humanity. "Hear, O Israel: Yahweh, the LORD is
                  one." - Deuteronomy 6:4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
      {/* end of vision, mission, beliefs */}
      {/* display */}
      
      <div
      className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
      style={jumbotronStyle}
    >
      <h1 className="mb-3 h2">Family of Yahweh</h1>
      <p>
        Welcome to our loving community! We believe in the power of love and unity.
        As the Bible says in 1 John 4:7-8 (NIV):
      </p>
      <p>
        "Dear friends, let us love one another, for love comes from God. Everyone who loves
        has been born of Yahweh and knows God. Whoever does not love does not know Yahweh, because
       Yahweh is love."
      </p>
    </div>

      {/* end of display */}
      {/* our leaders */}
      <div style={{ minHeight: '100vh', background: 'white', marginBottom: '20px' }}>
  <div className="container" style={{ marginTop: '100px' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'black' }}>Our Leaders</h2>
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-lg-4" key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="card p-0">
            <div className="card-image">
              <img src={card.image} alt="" />
            </div>
            <div className="card-content d-flex flex-column align-items-center">
              <h4 className="pt-2">{card.name}</h4>
              <h5>{card.role}</h5>
              <p>{card.place}</p> {/* Add the place */}
              <ul className="social-icons d-flex justify-content-center">
                <li style={{ '--i': 1 }}>
                  <a href="#">
                    <span className="fab fa-facebook"></span>
                  </a>
                </li>
                <li style={{ '--i': 2 }}>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li style={{ '--i': 3 }}>
                  <a href="#">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* end of leaders */}
    </div>
  );
}

export default About;
