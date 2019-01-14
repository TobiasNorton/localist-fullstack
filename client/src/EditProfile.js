import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dataStore from './DataStore'

import NavBar from './NavBar'

import { observer } from 'mobx-react'
import axios from 'axios'

import auth from './auth'
import history from './history'

class EditProfile extends Component {
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

  render() {
    if (this.state.loading) {
      return <div>Loading</div>
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
          <form onSubmit={dataStore.editProfile} className="form-body">
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
              />
            </div>
            <div className="input">
              <p>Gender*</p>
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
              </section>
            </div>
            <div className="input">
              <p>Location</p>
              <input
                type="text"
                name="profile[location]"
                defaultValue={this.state.profile.location}
                placeholder="My Hometown, Anywhere"
              />
            </div>
            <div className="input">
              <p>Languages you speak</p>
              <input
                type="text"
                name="profile[languages]"
                defaultValue={this.state.profile.languages}
                placeholder="English, Cantonese, Spanish"
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
              />
            </div>
            <div className="input">
              <p>Phone</p>
              <input
                type="text"
                name="profile[phone]"
                defaultValue={this.state.profile.phone}
                placeholder="911-555-3423"
              />
            </div>
            <div className="input">
              <p>Email</p>
              <input
                type="text"
                name="profile[email]"
                defaultValue={this.state.profile.email}
                placeholder="coolperson@coolmail.com"
              />
            </div>
            <div className="input">
              <p>Facebook</p>
              <input
                type="text"
                name="profile[facebook]"
                defaultValue={this.state.profile.facebook}
                placeholder="Your Facebook"
              />
            </div>
            <div className="input">
              <p>Instagram</p>
              <input
                type="text"
                name="profile[instagram]"
                defaultValue={this.state.profile.instagram}
                placeholder="@your.instagram.name"
              />
            </div>
            <div className="input">
              <p>List your upcoming trips:</p>

              {/* <div className="input">
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
                <input type="text" placeholder="City, Country" />
                <p>Travel Dates:</p>
                <div className="travel-dates">
                  <label>From</label>
                  <input type="date" /> <label>until</label> <input type="date" />
                </div>
              </div> */}

              {/* <div className="input">
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
              </div> */}

              <p>Upload a Photo of Yourself</p>
              <input
                type="file"
                name="profile[picture]"
                defaultValue={this.state.profile.picture}
                placeholder="picture.jpg"
              />
            </div>
            <button type="submit">Add Trips</button>
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

export default observer(EditProfile)
