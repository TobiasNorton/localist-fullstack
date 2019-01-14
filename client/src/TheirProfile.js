import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { observer } from 'mobx-react'
import dataStore from './DataStore'

class TheirProfile extends Component {
  componentDidMount = () => {
    dataStore.getProfile(this.props.match.params.id)
  }

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
          <div className="hamburger">
            <span />
            <span />
            <span />
          </div>
          {/* <div className="side-nav">
            <a href="#">Browse</a>
            <a href="#">My Profile</a>
            <a href="#">Sign Out</a>
          </div> */}
        </nav>

        <section className="their-profile">
          <div className="left">
            <div className="category">
              <h3 className="profile-name">{dataStore.profileDisplayed.name}</h3>
              <img
                src={dataStore.profileDisplayed.picture}
                className="profile-pic"
                alt="Budsarin"
              />
              <p className="from">{dataStore.profileDisplayed.location}</p>
              <p className="link-status">You are linked with {dataStore.profileDisplayed.name}</p>
              <button>Unlink</button>

              {/* DO NOT REMOVE COMMENTED CODE!! */}

              {/* <p className="link-status">Michael Kelly would like to link with you.</p>
              <div className="request-buttons">
                <button>Accept</button>
                <button>Decline</button>
              </div> */}

              {/* <p className="link-status">You are not linked with Budsarin Hiranprueck</p>
              <button>Send Request</button> */}
            </div>

            <div className="category">
              <p className="header">Languages I Speak</p>
              <div className="line" />
              <p className="body">Thai, English, Ngaw, some Spanish</p>
            </div>
          </div>

          <div className="right">
            <div className="category">
              <p className="header">Contact Me</p>
              <div className="line" />
              <ul className="body">
                <li>WhatsApp: {dataStore.profileDisplayed.whatsapp}</li>
                <li>Email: {dataStore.profileDisplayed.email}</li>
                <li>Facebook Messenger: {dataStore.profileDisplayed.facebook}</li>
                <li>Instagram: {dataStore.profileDisplayed.instagram}</li>
                <li>Phone: {dataStore.profileDisplayed.phone}</li>
              </ul>
            </div>

            {/* <div className="category">
              <p className="header">Contact Me:</p>
              <p className="body">You must be linked to see contact information.</p>
            </div> */}

            <div className="category">
              <p className="header">About Me</p>
              <div className="line" />
              <p className="body">{dataStore.profileDisplayed.about}</p>
            </div>
            <div className="category">
              <p className="header">Why I Joined Localist</p>
              <div className="line" />
              <p className="body">{dataStore.profileDisplayed.why_joined}</p>
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

export default observer(TheirProfile)
