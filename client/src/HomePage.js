import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import waterfall from './Waterfall.jpg'
import girlsInBoat from './meetpeoplesolotravel.jpeg'
import groupSitting from './GroupSitting.jpeg'
import arrow from './white_arrow.png'
import { slide as Menu } from 'react-burger-menu'

class HomePage extends Component {
  showWhatIsSection = () => {
    let whatIsLocalistSection = document.querySelector('.what-is')
    whatIsLocalistSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  showHowItWorksSection = () => {
    let howItWorksSection = document.querySelector('.how-it-works')
    howItWorksSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render() {
    return (
      <body>
        <Menu right>
          <Link id="about" className="menu-item" to="/login/">
            Join
          </Link>
          <Link id="contact" className="menu-item" to="/login/">
            Log In
          </Link>
          <p id="contact" className="menu-item" onClick={this.showWhatIsSection}>
            What is Localist?
          </p>
          <p id="contact" className="menu-item" onClick={this.showHowItWorksSection}>
            How Does It Work?
          </p>
        </Menu>
        <nav className="nav-bar">
          <p className="logo">Localist</p>
          <div className="links">
            <p onClick={this.showHowItWorksSection}>How Does It Work?</p>
            <Link to="/login/">Join</Link>
            <Link to="/login/">Log In</Link>
          </div>
        </nav>

        <section className="main">
          <p className="welcome">Welcome to</p>
          <div className="localist">Localist</div>
          <h3 className="main-caption">Meet with Locals, Anywhere in the World.</h3>
          <Link to="/login/">
            <button>Join the Family</button>
          </Link>
          <img src={arrow} className="arrow bounce" onClick={this.showWhatIsSection} />
        </section>

        <section className="what-is">
          <h1 onClick={this.showWhatIsSection}>What is Localist?</h1>
          <div className="box-container">
            <div className="box">
              <img src={waterfall} />
              <p className="header">Experience Culture</p>
              <p className="body">
                Localist provides a unique platform to meet with locals anywhere on the planet so
                that travelers can get a richer experience and see their travel destinations up
                close and personal. Find the best street food, the local music scene, the best
                views, the hidden gems that only the locals would know about. Localist seeks to help
                you find a richer cultural experience.
              </p>
            </div>
            <div className="box">
              <img src={girlsInBoat} />
              <p className="header">Locals Can Hang Out With Travelers</p>
              <p className="body">
                Show off your town! Remember, those from other countries don't have the same context
                as you; your town might be more fun than you think, and it could be a great
                opportunity to hang out with someone from another country. The best part is, it's
                non-committal, so no one is obligated to do anything beyond the initial hang out.
                Meet up for lunch, a beer or for a 3-day hike. It's up to you.
              </p>
            </div>
            <div className="box">
              <img src={groupSitting} />
              <p className="header">What Localist is Not</p>
              <p className="body">
                Localist is not a dating website or a platform for couch sharing, but hey, it's a
                free world! If you should choose to use it for such purposes, more power to you. We
                just want Localists on both sides to have the best cultural experience they can, and
                know that the level of commitment is completely up to you and who you link with.
              </p>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h1 onClick={this.showHowItWorksSection}>How Does It Work?</h1>
          <div className="box-container">
            <div className="box">
              <p className="header">Create an Account</p>
              <p className="body">
                You will be prompted to register with Localist through Google for authentication
                purposes. From there you will create a profile. After filling out the necessary
                information, you can add dates and destinations of trips you'll be taking, and
                Localist will take it from there.
              </p>
            </div>
            <div className="box">
              <p className="header">Browse Locals</p>
              <p className="body">
                Based on your travel information, you will be provided with a list of locals that
                live in your travel destinations. As you scroll through, you may view their profiles
                or link with them. Incoming travelers that are planning to visit your town may also
                link with you if your profile is set to "public". You may unlink with someone at any
                time.
              </p>
            </div>
            <div className="box">
              <p className="header">Set Up a Time and Place to Meet</p>
              <p className="body">
                Once you are linked with someone, your contact information will become visible to
                them and theirs will be visible to you. From here it's up to you two to decide how
                and when to meet and what activities are in store!
              </p>
            </div>
          </div>
        </section>
      </body>
    )
  }
}

export default HomePage
