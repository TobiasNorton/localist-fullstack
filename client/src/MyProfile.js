import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import MyLink from './MyLink'
// import Footer from './Footer'

import auth from './auth'
import history from './history'
import axios from 'axios'

class MyProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myProfileInfo: {
        linked_profiles: [],
        trips: []
      },
      links: []
    }
  }
  componentWillMount = () => {
    // If not logged in, kick me to the home page
    if (!auth.isAuthenticated()) {
      history.push('/')
    }
  }

  componentDidMount = () => {
    window.scrollTo(0, 0)
    this.reloadMyProfile()
  }

  profilesToRender = () => {
    let myLinkIDs = this.state.myProfileInfo.linked_profiles.map(link => link.id)
    return this.state.myProfileInfo.linked_profiles.filter(link => myLinkIDs.includes(link.id))
  }

  reloadMyProfile = () => {
    axios.get('/api/profile').then(response => {
      this.setState({
        myProfileInfo: response.data.profile
      })
    })
  }

  showUpcomingTrips = () => {
    let trips = this.state.myProfileInfo.trips.map(trip => {
      return (
        <ul key={trip.id}>
          <li>{trip.location}</li>
          <li>
            {new Date(trip.start_date).toLocaleDateString([], {
              month: 'long',
              day: '2-digit'
            })}{' '}
            -{' '}
            {new Date(trip.end_date).toLocaleDateString([], {
              month: 'long',
              day: '2-digit',
              year: 'numeric'
            })}
          </li>
          <button onClick={this.deleteTrip} value={trip.id} className="remove-trip-button">
            Remove Trip
          </button>
        </ul>
      )
    })
    return trips
  }

  deleteTrip = event => {
    axios.delete(`/api/trips/${event.target.value}`).then(response => {
      this.reloadMyProfile()
    })
  }

  whatsapp = () => {
    if (this.state.myProfileInfo.whatsapp) {
      return <li>WhatsApp: {this.state.myProfileInfo.whatsapp}</li>
    }
  }

  facebook = () => {
    if (this.state.myProfileInfo.facebook) {
      return <li>Facebook Messenger: {this.state.myProfileInfo.facebook}</li>
    }
  }

  email = () => {
    if (this.state.myProfileInfo.email) {
      return <li>Email: {this.state.myProfileInfo.email}</li>
    }
  }

  instagram = () => {
    if (this.state.myProfileInfo.instagram) {
      return <li>Instagram: {this.state.myProfileInfo.instagram}</li>
    }
  }

  phone = () => {
    if (this.state.myProfileInfo.phone) {
      return <li>Phone: {this.state.myProfileInfo.phone}</li>
    }
  }

  render() {
    return (
      <>
        <NavBar />

        <section className="my-profile">
          <div className="left">
            <div className="category">
              <img src={this.state.myProfileInfo.picture_url} className="profile-pic" alt="Toby" />
              <h3 className="profile-name">{this.state.myProfileInfo.name}</h3>
              <p className="from">{this.state.myProfileInfo.location}</p>
              <Link to={'/edit'} className="edit-profile-button">
                Edit Profile
              </Link>
            </div>

            <div className="category">
              <p className="header">Languages I Speak</p>
              <div className="line" />
              <p className="body">{this.state.myProfileInfo.languages}</p>
            </div>

            <div className="category">
              <p className="header">Preferred Contact Information</p>
              <div className="line" />
              <ul className="body">
                {this.whatsapp()}
                {this.email()}
                {this.facebook()}
                {this.instagram()}
                {this.phone()}
              </ul>
            </div>

            <div className="category">
              <p className="header">About Me</p>
              <div className="line" />
              <p className="body">{this.state.myProfileInfo.about}</p>
            </div>

            <div className="category">
              <p className="header">Why I Joined Localist</p>
              <div className="line" />
              <p className="body">{this.state.myProfileInfo.why_joined}</p>
            </div>
          </div>

          <div className="right">
            <div className="category">
              <p className="header">My Upcoming Trips</p>
              <div className="line" />

              {this.showUpcomingTrips()}
              <Link to={'/new_trip'} className="new-trip-button">
                Add a New Trip
              </Link>
            </div>
            <div className="category">
              <p className="my-links">My Links</p>
              <div className="line" />
            </div>

            <div className="line" />
            {this.profilesToRender().map((profile, index) => {
              return (
                <MyLink
                  key={profile.id}
                  id={profile.id}
                  reloadMyProfile={this.reloadMyProfile}
                  picture={profile.picture_url}
                  name={profile.name}
                  location={profile.location}
                  availability={''}
                />
              )
            })}

            <footer />
          </div>
        </section>
        {/* <Footer /> */}
      </>
    )
  }
}

export default observer(MyProfile)
