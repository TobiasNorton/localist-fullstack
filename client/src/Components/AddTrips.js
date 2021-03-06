import React, { Component } from 'react'
import { observer } from 'mobx-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import auth from '../auth'
import history from '../history'

import NavBar from '../NavBar'

class AddTrips extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showProfileLink: false
    }
  }

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

    const formData = new FormData(event.target)

    axios.post('/api/trips', formData).then(response => {
      // if (response.data.errors) {
      //   this.setState({ showProfileLink: true })
      // } else {
      history.push('/profile_ready')
      // }
    })
  }

  render() {
    return (
      <div>
        <NavBar />

        <div className="create-profile">
          <form onSubmit={this.addTrips} className="form-body">
            <div className="input">
              <p>Add a trip here:</p>

              <div className="input">
                <p>City:</p>
                <input
                  type="text"
                  name="trip[location]"
                  placeholder="Where to?"
                  autoComplete="off"
                />
                <p>Travel Dates:</p>

                <div className="travel-dates">
                  <label>From</label>
                  <input type="date" name="trip[start_date]" />
                </div>

                <div className="travel-dates">
                  <label>Until</label>
                  <input type="date" name="trip[end_date]" />
                </div>
              </div>
            </div>
            <button type="submit">Submit</button>
            {/* <button onClick={this.addAnothertrip}>Add Another Trip</button> */}
            {this.state.showProfileLink && <Link to="/profile_ready">Show The profile Anyway</Link>}
          </form>
        </div>
        <footer />
      </div>
    )
  }
}

export default observer(AddTrips)
