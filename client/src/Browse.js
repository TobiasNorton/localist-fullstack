import React, { Component } from 'react'
import Local from './Local'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { observer } from 'mobx-react'
import dataStore from './DataStore'

import { toJS } from 'mobx'

import auth from './auth'
import history from './history'

class Browse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentWillMount = () => {
    // If not logged in, kick me to the home page
    if (!auth.isAuthenticated()) {
      history.push('/')
    }
  }

  componentDidMount = () => {
    // dataStore.getAllProfiles()
    dataStore.populateBrowseSection(() => {
      this.setState({ loading: false })
    })

    // dataStore.getMyTrips()
    // dataStore.getAllMyTrips()
  }

  // Original axios call before MobX

  // componentDidMount = () => {
  //   axios.get('/api/profiles').then(response => {
  //     console.log(response.data.profiles)
  //     this.setState({
  //       profiles: response.data.profiles
  //     })
  //   })

  //   axios.get('/api/trips').then(response => {
  //     console.log(response.data)
  //   })
  // }

  renderLoading = () => {
    return <div>LOADING</div>
  }

  renderProfiles = () => {
    return (
      <>
        <p>
          We found {dataStore.peopleInMyDestinations.length} locals in your travel destinations!
        </p>

        {dataStore.peopleInMyDestinations.map((profile, index) => {
          return (
            <Local
              key={index}
              id={profile.id}
              data-id={profile.id}
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
                <a href="#">Budsarin Hiranprueck</a>
              </div>
            </div>
            <a href="#">Browse</a> <a href="#">My Profile</a>
            <Link to="/logout">Sign Out</Link>
            <div className="hamburger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </nav>

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
