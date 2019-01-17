import React, { Component } from 'react'
import Local from './Local'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

import { observer } from 'mobx-react'
// import dataStore from './DataStore'

// import { toJS } from 'mobx'

import auth from './auth'
import history from './history'

class Browse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      profiles: [],
      myProfileInfo: {
        linked_profiles: []
      }
    }
  }

  componentWillMount = () => {
    // If not logged in, kick me to the home page
    if (!auth.isAuthenticated()) {
      history.push('/')
    }
  }

  // populateBrowseSection = theFunctionToCallOnceWeHaveLoadedTheData => {
  // This is everyone whose location matches my trip destination
  //   axios.get('/api/profiles/browse').then(response => {
  //     dataStore.peopleInMyDestinations = response.data.profiles

  //     if (theFunctionToCallOnceWeHaveLoadedTheData) {
  //       theFunctionToCallOnceWeHaveLoadedTheData()
  //     }
  //   })
  // }

  // Original axios call before MobX

  componentDidMount = () => {
    axios.get('/api/profiles/browse').then(response => {
      console.log(response.data.profiles)
      this.setState({
        loading: false,
        profiles: response.data.profiles
      })
    })

    this.reloadMyProfile()

    // axios.get('/api/trips').then(response => {
    //   console.log(response.data)
    // })
  }

  reloadMyProfile = () => {
    axios.get('/api/profile').then(response => {
      console.log(response.data.profile)
      this.setState({
        myProfileInfo: response.data.profile
      })
    })
  }

  renderLoading = () => {
    return <div className="loading">LOADING</div>
  }

  profilesToRender = () => {
    const linkedProfileIDS = this.state.myProfileInfo.linked_profiles.map(profile => profile.id)

    return this.state.profiles.filter(profile => !linkedProfileIDS.includes(profile.id))
  }

  renderProfiles = () => {
    return (
      <>
        <p>We found {this.state.profiles.length} locals in your travel destinations!</p>
        {this.profilesToRender().map(profile => {
          return (
            <Local
              key={profile.id}
              reloadMyProfile={this.reloadMyProfile}
              id={profile.id}
              picture={profile.picture_url}
              name={profile.name}
              location={profile.location}
              availability={profile.availability}
            />
          )
        })}
      </>
    )
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
                <a href="#">Budsarin Hiranprueck</a>
              </div>
            </div>
            <Link to="/browse/">Browse</Link> <Link to="/profiles/user/">My Profile</Link>
            <Link to="/logout">Sign Out</Link>
            <div className="hamburger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </nav> */}

        <NavBar />

        <main className="browse-background">
          {this.state.loading ? this.renderLoading() : this.renderProfiles()}
        </main>
      </>
    )
  }
}
// map over profiles in state
// for each profile, return a 'Local' component
// pass all the properties down as props to the Local component
export default observer(Browse)
