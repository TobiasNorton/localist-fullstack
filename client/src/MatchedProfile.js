import React, { Component } from 'react'

class MatchedProfile extends Component {
  render() {
    return (
      <>
        <nav className="nav-bar">
          <p className="logo">Localist</p>
          <div className="links">
            <div className="dropdown">
              <a href="#" className="dropdown-button">
                Requests (4)
              </a>
              <div className="request-list hidden">
                <a href="#">Michael Kelly</a>
                <a href="#">Brenna Hensley</a>
                <a href="#">Francis Begby</a>
                <a href="#">Anaramhatoywan Mankot</a>
              </div>
            </div>
            <a href="#">Browse</a> <a href="#">My Profile</a>
            <a href="#">Sign Out</a> <a href="#" />
            <div className="hamburger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </nav>
        {/* <nav className="nav-bar">
          <p className="logo">Localist</p>
          <div className="links">
            <div className="dropdown">
              <a href="#" className="dropdown-button">
                Requests (4)
              </a>
              <div className="request-list hidden">
                <a href="#">Michael Kelly</a>
                <a href="#">Brenna Hensley</a>
                <a href="#">Francis Begby</a>
                <a href="#">Anaramhatoywan Mankot</a>
              </div>
            </div>
            <a href="#">Browse</a> <a href="#">My Profile</a>
            <a href="#">Sign Out</a> <a href="#" />
          </div>
        </nav> */}

        <section className="their-profile">
          <div className="left">
            <div className="category">
              <h3 className="profile-name">Budsarin Hiranprueck</h3>
              <img src="./BudsarinCropped.jpg" className="profile-pic" alt="Budsarin" />
              <p className="from">Chiang Mai, Thailand</p>
              <p className="link-status">You are linked with Budsarin Hiranprueck</p>
              <button>Unlink</button>
            </div>

            <div className="category">
              <p className="header">Contact Me</p>
              <div className="line" />
              <ul className="body">
                <li>WhatsApp: +1 5234 3486 324</li>
                <li>Email: budsar1234@something.com</li>
                <li>Facebook Messenger: Budsarin Hueranprueck</li>
                <li>Instagram: @b.huer88</li>
              </ul>
            </div>

            <div className="category">
              <p className="header">Languages I Speak</p>
              <div className="line" />
              <p className="body">Thai, English, Ngaw, some Spanish</p>
            </div>
          </div>

          <div className="right">
            <div className="category">
              <p className="header">About Me</p>
              <div className="line" />
              <p className="body">
                Hi, I'm Budsarin! I've lived in Chiang Mai for 10 years. I like to bacon ipsum dolor
                amet spare ribs landjaeger filet mignon, frankfurter porchetta salami tenderloin.
                Hamburger porchetta frankfurter meatball picanha. Kielbasa pork corned beef salami
                pork belly cow ball tip pork loin doner pastrami. Drumstick leberkas ribeye brisket.
                Leberkas spare ribs landjaeger tail picanha salami. Tenderloin pancetta shankle
                kevin, pork loin pastrami swine tail.
              </p>
            </div>
            <div className="category">
              <p className="header">Why I Joined Localist</p>
              <div className="line" />
              <p className="body">
                Landjaeger fatback kevin shankle, porchetta chicken jowl bresaola sirloin cupim
                flank kielbasa beef doner. Kevin pastrami porchetta meatball swine brisket short
                loin chuck. Chuck prosciutto ball tip sausage picanha tongue. Shoulder jowl buffalo
                pork chop doner leberkas corned beef. Beef ribs shoulder venison shankle ham hock.
              </p>
            </div>
            <div className="category">
              <p className="header">Available</p>
              <div className="line" />
              <p className="body">June 18 - July 8, 2019</p>
            </div>

            {/* <p className="link-status">You are linked with Budsarin Hiranprueck</p>
            <button>Unlink</button> */}
          </div>
        </section>
        <footer />
      </>
    )
  }
}

export default MatchedProfile
