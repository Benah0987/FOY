import React, { Component } from 'react';
import './events.css'; // Import the CSS file
import githomo from '../images/githomo.jpg';
import Firstfruit from '../images/Firstfruit.jpg';
import Hashanah from '../images/Hashanah.jpg';
import passover4 from '../images/passover4.jpg';
import Pentecost from '../images/Pentecost.jpg';
import YomKippur from '../images/YomKippur.png';
import Sukkot from '../images/Sukkot.jpg';
import Yedidyah from '../images/Yedidyah.jpg';
import Wanyoike from '../images/Wanyoike.jpg';
import Moses from '../images/Moses.jpg';
import Njuguna from '../images/Njuguna.jpg';

const containerStyle = {
  marginTop: '20px',
  background: '#eee',
};


const imageStyles = {
  maxWidth: '100%',
  height: 'auto',
};

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  }

  componentDidMount() {
    // Define the target date for the next event
    const targetDate = new Date('2024-04-15').getTime(); // Change this date to your next event's date

    // Update the countdown every second
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        this.setState({
          countdown: {
            days,
            hours,
            minutes,
            seconds,
          },
        });
      } else {
        // If the event has passed, you can handle it here, e.g., display a message.
      }
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts to prevent memory leaks
    clearInterval(this.interval);
  }

  render() {
    const { countdown } = this.state;

    return (
      <div>
        <div className="hero-wrap js-fullheight" style={{ height: '800px' }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
              <div className="col-xl-10 ftco-animate" data-scrollax="properties: { translateY: '70%' }">
                <h1 className="mb-2" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"> Sukkot <br /><span>festival 2019</span></h1>
                <p className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">December 21-24, 2019. Nyahururu, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        <section className="counter mt-4">
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
                          <h2 className="statistic-counter">{countdown.days}</h2>
                          <p>Days</p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="single_counter p-y-2 m-t-1">
                          <h2 className="statistic-counter">{countdown.hours}</h2>
                          <p>Hours</p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="single_counter p-y-2 m-t-1">
                          <h2 className="statistic-counter">{countdown.minutes}</h2>
                          <p>Minutes</p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="single_counter p-y-2 m-t-1">
                          <h2 className="statistic-counter">{countdown.seconds}</h2>
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
<section class="light">
  <div class="container py-2">
    <div class="h1 text-center text-dark" id="pageHeaderTitle">Feast Events</div>

    {/* <!-- Passover (Pesach) --> */}
    <article class="postcard light blue">
      <a class="postcard__img_link" href="#">
        <img class="postcard__img" src={passover4} alt="Passover (Pesach)" />
      </a>
      <div class="postcard__text t-dark">
        <h1 class="postcard__title blue"><a href="#">Passover (Pesach)</a></h1>
        <div class="postcard__subtitle small">
          <time datetime="2023-04-15">April 15, 2024</time> - <time datetime="2023-04-23">April 23, 2024</time>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">
          Passover (Pesach) is a significant Jewish festival that commemorates the liberation of the Israelites from slavery in ancient Egypt. The celebration typically lasts for eight days, from April 15th to April 23rd. During this time, Jewish families gather for special meals, rituals, and the Seder, where they retell the story of the Exodus.
        </div>
      </div>
    </article>

    {/* <!-- Feast of Unleavened Bread --> */}
    <article class="postcard light red">
      <a class="postcard__img_link" href="#">
        <img class="postcard__img" src="https://picsum.photos/501/500" alt="Feast of Unleavened Bread" />
      </a>
      <div class="postcard__text t-dark">
        <h1 class="postcard__title red"><a href="#">Feast of Unleavened Bread</a></h1>
        <div class="postcard__subtitle small">
          <time datetime="2023-04-16">April 16, 2024</time> - <time datetime="2023-04-22">April 22, 2024</time>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">
          The Feast of Unleavened Bread immediately follows Passover and lasts for seven days, from April 16th to April 22nd. During this time, leavened products are avoided, and matzah (unleavened bread) is eaten. It is a time for reflection and focusing on spiritual purity and freedom from sin.
        </div>
      </div>
    </article>

    {/* <!-- Feast of Firstfruits --> */}
    <article class="postcard light green">
      <a class="postcard__img_link" href="#">
        <img class="postcard__img" src={Firstfruit} alt="Feast of Firstfruits" />
      </a>
      <div class="postcard__text t-dark">
        <h1 class="postcard__title green"><a href="#">Feast of Firstfruits</a></h1>
        <div class="postcard__subtitle small">
          <time datetime="2023-04-17">April 17, 2024</time>
        </div>
        <div class= "postcard__bar"></div>
        <div class="postcard__preview-txt">
          The Feast of Firstfruits, also known as Bikkurim, is celebrated on April 17, 2024. It is a time to offer the first fruits of the harvest to Yahweh as a thanksgiving offering. This event marks the beginning of the grain harvest in Israel.
        </div>
      </div>
    </article>

    {/* <!-- Feast of Weeks (Pentecost) --> */}
    <article class="postcard light yellow">
      <a class="postcard__img_link" href="#">
        <img class="postcard__img" src={Pentecost} alt="Feast of Weeks (Pentecost)" />
      </a>
      <div class="postcard__text t-dark">
        <h1 class="postcard__title yellow"><a href="#">Feast of Weeks (Pentecost)</a></h1>
        <div class="postcard__subtitle small">
          <time datetime="2023-06-04">June 4, 2024</time> - <time datetime="2023-06-05">June 5, 2024</time>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">
          The Feast of Weeks, also known as Shavuot or Pentecost, is observed from June 4th to June 5th, 2024. It celebrates the giving of the Torah on Mount Sinai and is a time for Jewish people to reflect on their spiritual journey and receive God's blessings.
        </div>
      </div>
    </article>

    {/* <!-- Feast of Trumpets (Rosh Hashanah) --> */}
    <article class="postcard light blue">
      <a class="postcard__img_link" href="#">
        <img class="postcard__img" src={Hashanah} alt="Feast of Trumpets (Rosh Hashanah)" />
      </a>
      <div class="postcard__text t-dark">
        <h1 class="postcard__title blue"><a href="#">Feast of Trumpets (Rosh Hashanah)</a></h1>
        <div class="postcard__subtitle small">
          <time datetime="2023-09-25">September 25, 2024</time> - <time datetime="2023-09-27">September 27, 2024</time>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">
          Rosh Hashanah, the Jewish New Year, is celebrated from September 25th to September 27th, 2024. It's a time of reflection, prayer, and the sounding of the shofar (ram's horn). It marks the beginning of the High Holy Days.
        </div>
      </div>
    </article>


    <article class="postcard light red">
      <a class="postcard__img_link" href="#">
        <img class="postcard__img" src={Hashanah} alt="Day of Atonement (Yom Kippur)" />
      </a>
      <div class="postcard__text t-dark">
        <h1 class="postcard__title red"><a href="#">Day of Atonement (Yom Kippur)</a></h1>
        <div class="postcard__subtitle small">
          <time datetime="2023-10-4">October 4, 2024</time> - <time datetime="2023-10-5">October 5, 2024</time>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">
          Yom Kippur, the Day of Atonement, falls on October 4th to October 5th, 2024. It is a day of fasting, repentance, and seeking forgiveness. Jewish people gather for intense prayer and reflection during this solemn holiday.
        </div>
      </div>
    </article>

    
    <article class="postcard light green">
      <a class="postcard__img_link" href="#">
        <img class="postcard__img" src={Sukkot} alt="Feast of Tabernacles (Sukkot)" />
      </a>
      <div class="postcard__text t-dark">
        <h1 class="postcard__title green"><a href="#">Feast of Tabernacles (Sukkot)</a></h1>
        <div class="postcard__subtitle small">
          <time datetime="2023-10-9">October 9, 2024</time> - <time datetime="2023-10-15">October 15, 2024</time>
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">
          Sukkot, the Feast of Tabernacles, is celebrated from October 9th to October 15th, 2024. It is a time for building and dwelling in sukkahs (temporary huts), symbolizing the Israelites' wandering in the desert. It's a joyful holiday marked by prayers, meals, and community celebrations.
        </div>
      </div>
    </article>
  </div>
</section>

<div className="container" style={containerStyle}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6">
          <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
            <h3>Our Leaders <span> Team</span></h3>
            <p>"Our leaders inspire and steer us with their exceptional qualities and guidance, as Proverbs 11:14 reminds us: 'For lack of guidance a nation falls, but victory is won through many advisers.'"</p>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
            <div className="advisor_thumb">
            <img src={Wanyoike} alt="" style={imageStyles} />
              <div className="social-info">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div className="single_advisor_details_info">
              <h6>Wanyoike Kimama</h6>
              <p className="designation">Pastor and Mentor</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
            <div className="advisor_thumb">
              <img src= {Njuguna} alt="" style={imageStyles}/>
              <div className="social-info">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div className="single_advisor_details_info">
              <h6>Njuguna</h6>
              <p className="designation">Leader </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
            <div className="advisor_thumb">
              <img src={Moses} alt="" style={imageStyles}/>
              <div className="social-info">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div className="single_advisor_details_info">
              <h6>Moses</h6>
              <p className="designation">Leader </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
            <div className="advisor_thumb">
              <img src={Yedidyah} alt="" style={imageStyles}/>
              <div className="social-info">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div className="single_advisor_details_info">
              <h6>Yedidyah</h6>
              <p className="designation">leader and Mentor</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
  }
export default Events;
