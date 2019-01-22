import React, { Component } from 'react'
import axios from 'axios'

import auth from './auth'
import history from './history'

import NavBar from './NavBar'
import { Link } from 'react-router-dom'

class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      profile: undefined
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

  editProfile = event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    axios.put('/api/profile', formData).then(response => {
      // history.push('/my_profile')
      window.location = '/my_profile'
    })
    // this.getAllProfiles()
  }

  render() {
    if (this.state.loading) {
      // return <img src="/LoadingSpacePrincess.gif" />
      return (
        <>
          <NavBar />
          <div className="loading">Loading...</div>
        </>
      )
    }

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
          <form onSubmit={this.editProfile} className="form-body">
            <div className="input">
              <p>Name</p>
              <input
                type="text"
                name="profile[name]"
                defaultValue={this.state.profile.name}
                placeholder="Your Name Here"
              />
            </div>
            <div className="input">
              <p>Age</p>
              <input
                type="text"
                name="profile[age]"
                defaultValue={this.state.profile.age}
                maxLength="3"
                placeholder="Your Age Here"
                autoComplete="off"
              />
            </div>
            <div className="input">
              <p>Will your profile be public? This allows travelers to reach out to you.</p>
              <section className="gender">
                <div>
                  <input type="radio" name="profile[available]" id="yes" value="true" checked />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div>
                  <input type="radio" name="profile[available]" id="no" value="false" />
                  <label htmlFor="no">Not right now</label>
                </div>
              </section>

              {/* <p>Gender*</p>
              <section className="gender">
                <div>
                  <input type="radio" name="profile[gender]" id="male" value="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input type="radio" name="profile[gender]" id="female" value="female" />
                  <label htmlFor="female">Female</label>
                </div>
                <div>
                  <input type="radio" name="profile[gender]" id="other" value="other" />
                  <label htmlFor="other">Other/Prefer not to answer</label>
                </div>
              </section> */}
            </div>
            <div className="input">
              <p>Location</p>
              <input
                type="text"
                name="profile[location]"
                defaultValue={this.state.profile.location}
                placeholder="My Hometown, Anywhere"
                autoComplete="off"
              />
            </div>
            <div className="input">
              <p>Languages you speak</p>
              <input
                type="text"
                name="profile[languages]"
                defaultValue={this.state.profile.languages}
                placeholder="English, Cantonese, Spanish"
                autoComplete="off"
              />
            </div>
            <div className="input">
              <p>Tell us about yourself!</p>
              <textarea
                className="big-field"
                type="text"
                name="profile[about]"
                defaultValue={this.state.profile.about}
                rows="5"
                placeholder="Interests, hobbies, background, etc."
                autoComplete="off"
              />
            </div>
            <div className="input">
              <p>Why did you decide to join Localist?</p>
              <textarea
                className="big-field"
                type="text"
                name="profile[why_joined]"
                defaultValue={this.state.profile.why_joined}
                rows="5"
                placeholder="Hidden food gems, good conversation"
                autoComplete="off"
              />
            </div>

            <p>Please list your preferred methods of contact.</p>
            <div className="input">
              <p>WhatsApp</p>
              <input
                type="text"
                name="profile[whatsapp]"
                defaultValue={this.state.profile.whatsapp}
                placeholder="+ 123 4567890123"
                autoComplete="off"
              />
            </div>
            <div className="input">
              <p>Phone</p>
              <input
                type="text"
                name="profile[phone]"
                defaultValue={this.state.profile.phone}
                placeholder="911-555-3423"
                autoComplete="off"
              />
            </div>
            <div className="input">
              <p>Email</p>
              <input
                type="text"
                name="profile[email]"
                defaultValue={this.state.profile.email}
                placeholder="coolperson@coolmail.com"
                autoComplete="off"
              />
            </div>
            <div className="input">
              <p>Facebook</p>
              <input
                type="text"
                name="profile[facebook]"
                defaultValue={this.state.profile.facebook}
                placeholder="Your Facebook"
                autoComplete="off"
              />
            </div>
            <div className="input">
              <p>Instagram</p>
              <input
                type="text"
                name="profile[instagram]"
                defaultValue={this.state.profile.instagram}
                placeholder="@your.instagram.name"
                autoComplete="off"
              />
            </div>
            <div className="input">
              <p>List your upcoming trips:</p>

              <p>Upload a Photo of Yourself</p>
              <input
                type="file"
                name="profile[picture]"
                defaultValue={this.state.profile.picture}
                placeholder="picture.jpg"
                autoComplete="off"
              />
            </div>
            <button type="submit">Back to Profile</button>
          </form>
          {/* <Link to="/browse/" className="button-link">
            Search Locals
          </Link>
          <Link to="/profiles/user/:id/" className="button-link">
            My Profile
          </Link> */}
          {/* <button type="submit">My Profile</button>
          <button type="submit">Search Locals</button>
          <button type="submit">Add Trips</button> */}
        </div>
        <footer />
      </div>
    )
  }
}

export default Edit
