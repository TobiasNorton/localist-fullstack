import React, { Component } from 'react'

class RequestProfile extends Component {
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
          </div>
        </nav>

        <section className="their-profile">
          <div className="left">
            <div className="category">
              <h3 className="profile-name">Michael Kelly</h3>
              <img src="./MichaelKelly.jpg" className="profile-pic" alt="Michael Kelly" />
              <p className="from">Galway, Ireland</p>
              <p className="link-status">Michael Kelly would like to link with you.</p>
              <div className="request-buttons">
                <button>Accept</button>
                <button>Decline</button>
              </div>
            </div>

            <div className="category">
              <p className="header">Contact Me</p>
              <div className="line" />
              <p className="body">You must be linked to see contact information.</p>
              {/* <ul className="body">
                <li>WhatsApp: +1 5234 3486 324</li>
                <li>Email: mkelly@something.com</li>
                <li>Facebook Messenger: Michael Kelly</li>
                <li>Instagram: @mike.like.mike</li>
              </ul> */}
            </div>

            <div className="category">
              <p className="header">Languages I Speak</p>
              <div className="line" />
              <p className="body">English</p>
            </div>
          </div>

          <div className="right">
            <div className="category">
              <p className="header">About Me</p>
              <div className="line" />
              <p className="body">
                I am a lover of the outdoors, beer and good food. I love to travel and I porchetta
                salami tenderloin. Hamburger porchetta frankfurter meatball picanha. Kielbasa pork
                corned beef salami pork belly cow ball tip pork loin doner pastrami. Drumstick
                leberkas ribeye brisket. Leberkas spare ribs landjaeger tail picanha salami.
                Tenderloin pancetta shankle kevin, pork loin pastrami swine tail.
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
              <p className="header">Coming to St. Petersburg, FL</p>
              <div className="line" />
              <p className="body">March 28 - April 6, 2019</p>
            </div>
          </div>
        </section>
        <footer />
      </>
    )
  }
}

export default RequestProfile
