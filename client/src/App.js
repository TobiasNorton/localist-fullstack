import React, { Component } from 'react'
import './App.css'
import HomePage from './HomePage'
import MatchedProfile from './MatchedProfile'
import MyProfile from './MyProfile'
import RequestProfile from './RequestProfile'
import Browse from './Browse'
import CreateProfile from './CreateProfile'
import UnmatchedProfile from './UnmatchedProfile'
import AllSet from './AllSet'
import TheirProfile from './TheirProfile'

import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import dataStore from './DataStore'

class App extends Component {
  render() {
    return (
      <Router>
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
          <Route path="/create_profile/" component={CreateProfile} />
          <Route path="/profile_ready/" component={AllSet} />
          <Route path="/browse/" component={Browse} />
          <Route path="/profiles/user/:id/" component={MyProfile} />
          <Route path="/profiles/:id/" component={TheirProfile} />
        </>
      </Router>
    )
  }
}

export default observer(App)
