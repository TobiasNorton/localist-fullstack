import React, { Component } from 'react'
import Local from './Local'
import axios from 'axios'
import NavBar from '../NavBar'

import { observer } from 'mobx-react'

import auth from '../auth'
import history from '../history'

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

  componentDidMount = () => {
    axios.get('/api/profiles/browse').then(response => {
      this.setState({
        loading: false,
        profiles: response.data.profiles
      })
    })

    this.reloadMyProfile()
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
    return <div className="loading">Loading...</div>
  }

  profilesToRender = () => {
    const linkedProfileIDS = this.state.myProfileInfo.linked_profiles.map(profile => profile.id)

    return this.state.profiles.filter(profile => !linkedProfileIDS.includes(profile.id))
  }

  renderProfiles = () => {
    return (
      <>
        <div className="category">
          <p className="browse-prompt">
            We found <span>{this.state.profiles.length}</span> locals in your travel destinations!
          </p>
        </div>

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
    if (this.state.loading) {
      return (
        <>
          <NavBar />
          <div className="loading">Loading...</div>
        </>
      )
    }

    return (
      <>
        <NavBar />

        <main className="browse-background">
          {this.state.loading ? this.renderLoading() : this.renderProfiles()}
        </main>
        <div className="footer" />
      </>
    )
  }
}

export default observer(Browse)
