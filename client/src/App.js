import React, { Component } from 'react'
import './App.css'
import HomePage from './HomePage'
import MyProfile from './MyProfile'
import Browse from './Browse'
import EditProfile from './EditProfile'
import AddTrips from './AddTrips'
import ProfileReady from './ProfileReady'
import TheirProfile from './TheirProfile'
import Edit from './Edit'
import NewTrip from './NewTrip'
import RequestProfile from './RequestProfile'

import { observer } from 'mobx-react'

import { Router, Route } from 'react-router-dom'

import auth from './auth'
import history from './history'

import axios from 'axios'

class App extends Component {
  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
  }

  render() {
    return (
      <Router history={history}>
        <>
          <Route exact path="/" component={HomePage} />
          <Route path="/profile/" component={EditProfile} />
          <Route path="/profile_ready/" component={ProfileReady} />
          <Route path="/add_trips/" component={AddTrips} />
          <Route path="/browse/" component={Browse} />
          <Route exact path="/my_profile" component={MyProfile} />
          <Route exact path="/profiles/:id/" component={TheirProfile} />
          <Route path="/edit/" component={Edit} />
          <Route path="/new_trip" component={NewTrip} />
          <Route path="/request" component={RequestProfile} />
          <Route path="/login" render={() => auth.login()} />

          <Route
            path="/logout"
            render={() => {
              auth.logout()

              return <></>
            }}
          />
          <Route
            path="/callback"
            render={() => {
              auth.handleAuthentication(() => {
                // Set the axios authentication headers
                axios.defaults.headers.common = {
                  Authorization: auth.authorizationHeader()
                }
              })

              return <></>
            }}
          />
        </>
      </Router>
    )
  }
}

export default observer(App)
