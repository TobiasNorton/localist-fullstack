import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import NavBar from './NavBar'

import { observer } from 'mobx-react'
import dataStore from './DataStore'

class TheirProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: {}
    }
  }
  componentDidMount = () => {
    // dataStore.getProfile(this.props.match.params.id)
    axios.get(`/api/profiles/${this.props.match.params.id}`).then(response => {
      console.log(response.data.profile)
      this.setState({
        profile: response.data.profile
      })
      // this.state = response.data.displaying_profile
    })
  }

  render() {
    return (
      <>
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
          <div className="hamburger">
            <span />
            <span />
            <span />
          </div>
          <div className="side-nav">
            <a href="#">Browse</a>
            <a href="#">My Profile</a>
            <a href="#">Sign Out</a>
          </div>
        </nav> */}

        <NavBar />

        <section className="their-profile">
          <div className="left">
            <div className="category">
              <h3 className="profile-name">{this.state.profile.name}</h3>
              <img src={this.state.profile.picture_url} className="profile-pic" alt="Budsarin" />
              <p className="from">{this.state.profile.location}</p>
              {/* <p className="link-status">You are linked with {this.state.profile.name}</p>
              <button>Unlink</button> */}

              {/* DO NOT REMOVE THIS COMMENTED CODE vvvv !! */}

              {/* <p className="link-status">Michael Kelly would like to link with you.</p>
              <div className="request-buttons">
                <button>Accept</button>
                <button>Decline</button>
              </div> */}

              <p className="link-status">You are not linked with {this.state.profile.name}</p>
              <button>Send Request</button>

              {/* DO NOT REMOVE THIS CODE ^^^^ !!! */}
            </div>

            <div className="category">
              <p className="header">Languages I Speak</p>
              <div className="line" />
              <p className="body">{this.state.profile.languages}</p>
            </div>
          </div>

          <div className="right">
            {/* <div className="category">
              <p className="header">Contact Me</p>
              <div className="line" />
              <ul className="body">
                <li>WhatsApp: {this.state.profile.whatsapp}</li>
                <li>Email: {this.state.profile.email}</li>
                <li>Facebook Messenger: {this.state.profile.facebook}</li>
                <li>Instagram: {this.state.profile.instagram}</li>
                <li>Phone: {this.state.profile.phone}</li>
              </ul>
            </div> */}

            <div className="category">
              <p className="header">Contact Me</p>
              <div className="line" />
              <p className="body">You must be linked to see contact information.</p>
            </div>

            <div className="category">
              <p className="header">About Me</p>
              <div className="line" />
              <p className="body">{this.state.profile.about}</p>
            </div>
            <div className="category">
              <p className="header">Why I Joined Localist</p>
              <div className="line" />
              <p className="body">{this.state.profile.why_joined}</p>
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
