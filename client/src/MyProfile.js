import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
// import Local from './Local'
import NavBar from './NavBar'
import MyLink from './MyLink'

import auth from './auth'
import history from './history'
import axios from 'axios'

class MyProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myProfileInfo: {
        linked_profiles: [],
        trips: []
      },
      links: []
    }
  }
  componentWillMount = () => {
    // If not logged in, kick me to the home page
    if (!auth.isAuthenticated()) {
      history.push('/')
    }
  }

  componentDidMount = () => {
    this.reloadMyProfile()
  }

  profilesToRender = () => {
    let myLinkIDs = this.state.myProfileInfo.linked_profiles.map(link => link.id)
    return this.state.myProfileInfo.linked_profiles.filter(link => myLinkIDs.includes(link.id))
  }

  reloadMyProfile = () => {
    axios.get('/api/profile').then(response => {
      // console.log(response.data.profile)
      this.setState({
        myProfileInfo: response.data.profile
      })
    })
  }

  showUpcomingTrips = () => {
    console.log(this.state.myProfileInfo.trips)
    // let trips = this.state.myProfileInfo.trips.trips.map(trip => {
    //   return (
    //     <ul>
    //       <li>{trip.location}</li>
    //       <li>
    //         {trip.start_date} - {trip.end_date}
    //       </li>
    //     </ul>
    //   )
    // })
    // return trips
  }

  firstName = () => {
    let name = this.state.myProfileInfo.linked_profiles.map(link => link.name)
    // console.log(name)
    // let firstAndLastName = name.split(' ')
    // return firstAndLastName[0]
  }

  render() {
    return (
      <>
        {/* <nav className="nav-bar">
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
        </nav> */}

        <NavBar />

        <section className="my-profile">
          <div className="left">
            <div className="category">
              <h3 className="profile-name">{this.state.myProfileInfo.name}</h3>
              <img src={this.state.myProfileInfo.picture_url} className="profile-pic" alt="Toby" />
              <p className="from">{this.state.myProfileInfo.location}</p>
              <Link to={'/edit'} className="button">
                Edit Profile
              </Link>
            </div>

            <div className="category">
              <p className="header">Languages I Speak</p>
              <div className="line" />
              <p className="body">{this.state.myProfileInfo.languages}</p>
            </div>

            <div className="category">
              <p className="header">Preferred Contact Information</p>
              <div className="line" />
              <ul className="body">
                <li>WhatsApp: {this.state.myProfileInfo.whatsapp}</li>
                <li>Email: {this.state.myProfileInfo.email}</li>
                <li>Facebook Messenger: {this.state.myProfileInfo.facebook}</li>
                <li>Instagram: {this.state.myProfileInfo.instagram}</li>
                <li>Phone: {this.state.myProfileInfo.phone}</li>
              </ul>
            </div>

            <div className="category">
              <p className="header">About Me</p>
              <div className="line" />
              <p className="body">{this.state.myProfileInfo.about}</p>
            </div>

            <div className="category">
              <p className="header">Why I Joined Localist</p>
              <div className="line" />
              <p className="body">{this.state.myProfileInfo.why_joined}</p>
            </div>
          </div>

          <div className="right">
            <div className="category">
              <p className="header">My Upcoming Trips</p>
              <div className="line" />

              {/* {this.showUpcomingTrips()} */}
              <ul>
                <li>Paris, France</li>
                <li>June 18 - July 8, 2019</li>
              </ul>
              <ul className="body">
                <li>Chiang Mai, Thailand</li>
                <li>June 18 - July 8, 2019</li>
              </ul>
            </div>

            <p className="my-links">My Links</p>
            <div className="line" />
            {this.profilesToRender().map((profile, index) => {
              return (
                <MyLink
                  key={profile.id}
                  id={profile.id}
                  reloadMyProfile={this.reloadMyProfile}
                  picture={profile.picture_url}
                  name={profile.name}
                  firstName={this.firstName()}
                  location={profile.location}
                  availability={''}
                />
              )
            })}

            {/* <div className="local">
              <section>
                <img src="./JeanSebastian.jpeg" className="mini-pic" />
              </section>
              <section>
                <p>Jean-Sebastian Sirois</p>
                <p>Paris, France</p>
                <p>Available: June 18 - July 8, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./Margaux.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Margaux Anati</p>
                <p>Paris, France</p>
                <p>Available: June 18 - July 8, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./Bruno.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Bruno Chastain</p>
                <p>Paris, France</p>
                <p>Available: June 28 - July 4, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./Sarah.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Sarah Richelieu</p>
                <p>Paris, France</p>
                <p>Available: June 18 - July 2, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./Duanphen.jpeg" className="mini-pic" />
              </section>
              <section>
                <p>Duanphen Kaekwoon</p>
                <p>Chiang Mai, Thailand</p>
                <p>Available: June 18 - July 8, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./BudsarinCropped.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Budsarin Hiranprueck</p>
                <p>Chiang Mai, Thailand</p>
                <p>Available: June 18 - July 8, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div>

            <div className="local">
              <section>
                <img src="./Naowarat.jpg" className="mini-pic" />
              </section>
              <section>
                <p>Naowarat Angsakul</p>
                <p>Chiang Mai, Thailand</p>
                <p>Available: June 18 - July 8, 2019</p>
                <button>View Profile</button>
                <button>Unlink</button>
              </section>
            </div> */}
            <footer />
          </div>
        </section>
        <button onClick={this.firstName} />
      </>
    )
  }
}

export default observer(MyProfile)
