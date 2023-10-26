import React from 'react';
import './about.css'

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

  const cardData = [
    {
      image: 'https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'SomeOne Famous',
      role: 'Creative Designer',
    },
    {
      image: 'https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'SomeOne Famous',
      role: 'Creative Designer',
    },
    {
      image: 'https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'SomeOne Famous',
      role: 'Creative Designer',
    },
  ];
  return (
    <div>
      {/* Carousel */}
      <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
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
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
      {/* End Carousel */}

      {/* vision, mission, beliefs */}
      <div className="container bootstrap snippets bootdeys">

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

        <div className="col-md-4 col-sm-6 content-card">
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
        has been born of God and knows God. Whoever does not love does not know God, because
        God is love."
      </p>
    </div>

      {/* end of display */}
      {/* our leaders */}
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #000428, #004683)' }}>
      <div className="container" style={cardContainerStyle}>
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-lg-4" key={index} style={cardColStyle}>
            <div className="card p-0">
              <div className="card-image">
                <img src={card.image} alt="" />
              </div>
              <div className="card-content d-flex flex-column align-items-center">
                <h4 className="pt-2">{card.name}</h4>
                <h5>{card.role}</h5>
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
