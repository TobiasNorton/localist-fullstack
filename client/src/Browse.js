import React, { Component } from 'react'
import Local from './Local'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { observer } from 'mobx-react'
import dataStore from './DataStore'

import { toJS } from 'mobx'

class Browse extends Component {
  componentDidMount = () => {
    // dataStore.getAllProfiles()
    dataStore.populateBrowseSection()
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
            <a href="#">Sign Out</a> <a href="#" />
            <div className="hamburger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </nav>

        <main className="browse-background">
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
        </main>
      </>
    )
  }
}
// map over profiles in state
// for each profile, return a 'Local' component
// pass all the properties down as props to the Local component
export default observer(Browse)
