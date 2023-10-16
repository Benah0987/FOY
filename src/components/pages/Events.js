import React from 'react';
import './events.css'; // Import the CSS file
import githomo from '../images/githomo.jpg'

function Events() {
  return (
    <div>
      <div className="hero-wrap js-fullheight" style={{ height: '800px' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
            <div className="col-xl-10 ftco-animate" data-scrollax="properties: { translateY: '70%' }">
              <h1 className="mb-2" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"> Developer <br /><span>Conference 2019</span></h1>
              <p className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">December 21-24, 2019. Paris, Italy</p>
            </div>
          </div>
        </div>
      </div>

      <section className="counter">
        <div className="main_counter_area">
          <div className="overlay p-y-3">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-6">
                  <h3 className="mb-2 event-date-header-small">Event Date</h3>
                  <p className="event-date-text-big">Count every second <span>Until The Event</span></p>
                </div>
                <div className="col-md-6">
                  <div className="row text-center">
                    <div className="col-md-3">
                      <div className="single_counter p-y-2 m-t-1">
                        <h2 className="statistic-counter">200</h2>
                        <p>Days</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="single_counter p-y-2 m-t-1">
                        <h2 className="statistic-counter">10</h2>
                        <p>Hours</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="single_counter p-y-2 m-t-1">
                        <h2 className="statistic-counter">30</h2>
                        <p>Minutes</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="single_counter p-y-2 m-t-1">
                        <h2 className="statistic-counter">45</h2>
                        <p>Seconds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={{ marginBottom: '40px' }}>
  <div class="container px-4">
    <div class="row gx-4 justify-content-center">
      <div class="col-lg-12">
        <div class="border-bottom border-primary mb-4 pb-3">
          <h2 class="text-primary">About these Sacred Events</h2>
        </div>
      </div>
      <div class="col-lg-6">
        <img
          src={githomo}
          alt="About Us"
          class="img-fluid"
        />
      </div>
      <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center">
        <p class="lead">
          Welcome to the Family of YAHWEH, where we celebrate a series of sacred events that hold deep spiritual significance. These events guide our spiritual journey and are rooted in our faith and tradition.
        </p>
        <p>
          These events include Passover (Pesach), Unleavened Bread (Matzot), Firstfruits (Bikkurim), Pentecost (Shavuot), Feast of Trumpets (Yom Teruah), Day of Atonement (Yom Kippur), Feast of Tabernacles (Sukkot), and the Eighth Day (Shemini Atzeret). They remind us of Yahwehs's acts of salvation, from the deliverance in Egypt to the giving of the law on Mount Sinai.
        </p>
        <p>
          Through special meals, rituals, and reflections, we observe these events to strengthen our faith, seek forgiveness, and remember the historical and spiritual significance of our traditions.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Events;
