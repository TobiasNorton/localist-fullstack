import React, { Component } from 'react'
import './App.css'
import HomePage from './HomePage'
import MatchedProfile from './MatchedProfile'
import MyProfile from './MyProfile'
import RequestProfile from './RequestProfile'
import Browse from './Browse'
import EditProfile from './EditProfile'
import UnmatchedProfile from './UnmatchedProfile'
import AllSet from './AllSet'
import TheirProfile from './TheirProfile'

import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

import { Router, Route, Link } from 'react-router-dom'

import auth from './auth'
import history from './history'

import axios from 'axios'

import dataStore from './DataStore'

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
          {/* <HomePage /> */}
          {/* <CreateProfile /> */}
          {/* <AllSet /> */}
          {/* <MyProfile /> */}
          {/* <Browse /> */}
          {/* <UnmatchedProfile /> */}
          {/* <MatchedProfile /> */}
          {/* <RequestProfile /> */}
          {/* <TheirProfile /> */}
          <Route exact path="/" component={HomePage} />
          <Route path="/profile/" component={EditProfile} />
          <Route path="/profile_ready/" component={AllSet} />
          <Route path="/browse/" component={Browse} />
          <Route path="/profiles/user/:id/" component={MyProfile} />
          <Route path="/profiles/:id/" component={TheirProfile} />

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
