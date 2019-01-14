import React, { Component } from 'react'
import { observer } from 'mobx-react'
import axios from 'axios'

import auth from './auth'
import history from './history'

import dataStore from './DataStore'

import NavBar from './NavBar'

class AddTrips extends Component {
  componentWillMount = () => {
    // If not logged in, kick me to the home page
    if (!auth.isAuthenticated()) {
      history.push('/')
    }
    axios.get('/api/profile').then(response => {
      this.setState({
        profile: response.data.profile,
        loading: false
      })
    })
  }

  addTrips = event => {
    event.preventDefault()
    axios.post('/api/trips/').then(response => {})
  }

  // addAnotherTrip = () => {
  //   return (
  //     <div className="input">
  //       <p>City:</p>
  //       <input type="text" placeholder="City, Country" />
  //       <p>Travel Dates:</p>

  //       <div className="travel-dates">
  //         <label>From</label>
  //         <input type="date" />
  //       </div>

  //       <div className="travel-dates">
  //         <label>Until</label>
  //         <input type="date" />
  //       </div>
  //     </div>
  //   )
  // }

  render() {
    return (
      <div>
        {/* <nav className="nav-bar">
          <p className="logo">Localist</p>
          <div className="links">
            <a href="#">Join</a> <a href="#">Log In</a> <a href="#" />
          </div>
        </nav> */}

        <NavBar />

        <div className="create-profile">
          <form onSubmit={this.addTrips} className="form-body">
            <div className="input">
              <p>List your upcoming trips:</p>

              <div className="input">
                <p>City:</p>
                <input type="text" placeholder="City, Country" />
                <p>Travel Dates:</p>
                <div className="travel-dates">
                  <label>From</label>
                  <input type="date" /> <label>until</label> <input type="date" />
                </div>
              </div>

              <div className="input">
                <p>City:</p>
                <input type="text" placeholder="City, Country" />
                <p>Travel Dates:</p>

                <div className="travel-dates">
                  <label>From</label>
                  <input type="date" />
                </div>

                <div className="travel-dates">
                  <label>Until</label>
                  <input type="date" />
                </div>
              </div>

              <div className="input">
                <p>City:</p>
                <input type="text" name="profile[name]" placeholder="City, Country" />
                <p>Travel Dates:</p>
                <div className="travel-dates">
                  <section className="from-until">
                    <label>From</label>
                    <input type="date" name="profile[name]" />
                  </section>
                  <section className="from-until">
                    <label>Until</label>
                    <input type="date" name="profile[name]" />
                  </section>
                </div>
              </div>
            </div>
            <button type="submit">Submit</button>
            {/* <button onClick={this.addAnothertrip}>Add Another Trip</button> */}
          </form>
        </div>
        <footer />
      </div>
    )
  }
}

export default observer(AddTrips)
