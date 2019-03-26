import React, { Component } from 'react'
import axios from 'axios'

import NavBar from '../NavBar'

import { observer } from 'mobx-react'

import auth from '../auth'
import history from '../history'

class TheirProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: {},
      isLinked: false,
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
    window.scrollTo(0, 0)
    axios.get(`/api/profiles/${this.props.match.params.id}`).then(response => {
      console.log(response.data.profile)
      this.setState({
        profile: response.data.profile
      })
    })

    this.loadMyProfile()
  }

  loadMyProfile = () => {
    axios.get('/api/profile').then(response => {
      console.log(response.data.profile)
      this.setState({
        myProfileInfo: response.data.profile
      })
    })
  }

  renderLinkStatus = () => {
    const linkedProfileIDs = this.state.myProfileInfo.linked_profiles.map(profile => profile.id)

    if (linkedProfileIDs.includes(this.state.profile.id)) {
      return (
        <>
          <p className="link-status">You are linked with {this.state.profile.name}</p>
          <button onClick={this.deleteLink}>Unlink</button>
        </>
      )
    } else {
      return (
        <>
          <p className="link-status">You are not linked with {this.state.profile.name}</p>
          <button onClick={this.createLink}>Link</button>
        </>
      )
    }
  }

  renderContactInfo = () => {
    const linkedProfileIDs = this.state.myProfileInfo.linked_profiles.map(profile => profile.id)

    if (linkedProfileIDs.includes(this.state.profile.id)) {
      return (
        <>
          <div className="category">
            <p className="header">Contact Me</p>
            <div className="line" />
            <ul className="body">
              {this.whatsapp()}
              {this.email()}
              {this.facebook()}
              {this.instagram()}
              {this.phone()}
            </ul>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="category">
            <p className="header">Contact Me</p>
            <div className="line" />
            <p className="body">You must be linked to see contact information.</p>
          </div>
        </>
      )
    }
  }

  deleteLink = event => {
    axios.delete(`/api/links/${this.state.profile.id}`).then(response => {
      this.loadMyProfile()
    })
  }

  createLink = event => {
    axios.post('/api/links', { other_profile_id: this.state.profile.id }).then(response => {
      this.loadMyProfile()
    })
  }

  whatsapp = () => {
    if (this.state.profile.whatsapp) {
      return <li>WhatsApp: {this.state.profile.whatsapp}</li>
    }
  }

  facebook = () => {
    if (this.state.profile.facebook) {
      return <li>Facebook Messenger: {this.state.profile.facebook}</li>
    }
  }

  email = () => {
    if (this.state.profile.email) {
      return <li>Email: {this.state.profile.email}</li>
    }
  }

  instagram = () => {
    if (this.state.profile.instagram) {
      return <li>Instagram: {this.state.profile.instagram}</li>
    }
  }

  phone = () => {
    if (this.state.profile.phone) {
      return <li>Phone: {this.state.profile.phone}</li>
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <section className="their-profile">
          <div className="left">
            <div className="category">
              <img src={this.state.profile.picture_url} className="profile-pic" alt="Budsarin" />
              <h3 className="profile-name">{this.state.profile.name}</h3>
              <p className="from">{this.state.profile.location}</p>

              {this.renderLinkStatus()}
            </div>

            <div className="category">
              <p className="header">Languages I Speak</p>
              <div className="line" />
              <p className="body">{this.state.profile.languages}</p>
            </div>
          </div>

          <div className="right">
            {this.renderContactInfo()}

            <div className="category">
              <p className="header">About Me</p>
              <div className="line" />
              <p className="body">{this.state.profile.about}</p>
            </div>
            <div className="category">
              <p className="header">Why I Joined Localist</p>
              <div className="line" />
              <p className="body">{this.state.profile.why_joined}</p>
            </div>
            <div className="category">
              <p className="header">Available</p>
              <div className="line" />
              <p className="body">Any day after 5. Free on weekends.</p>
            </div>
          </div>
        </section>
        <footer />
      </>
    )
  }
}

export default observer(TheirProfile)
