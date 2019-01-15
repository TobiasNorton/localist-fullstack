import React, { Component } from 'react'
import Local from './Local'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

import { observer } from 'mobx-react'
import dataStore from './DataStore'

import { toJS } from 'mobx'

import auth from './auth'
import history from './history'

class Browse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      profiles: []
    }
  }

  componentWillMount = () => {
    // If not logged in, kick me to the home page
    if (!auth.isAuthenticated()) {
      history.push('/')
    }
  }

  //componentDidMount = () => {
  // dataStore.getAllProfiles()
  //   dataStore.populateBrowseSection(() => {
  //     this.setState({ loading: false })
  //   })
  // }

  // populateBrowseSection = theFunctionToCallOnceWeHaveLoadedTheData => {
  // This is everyone whose location matches my trip destination
  //   axios.get('/api/profiles/browse').then(response => {
  //     dataStore.peopleInMyDestinations = response.data.profiles

  //     if (theFunctionToCallOnceWeHaveLoadedTheData) {
  //       theFunctionToCallOnceWeHaveLoadedTheData()
  //     }
  //   })
  // }

  // Original axios call before MobX

  componentDidMount = () => {
    axios.get('/api/profiles/browse').then(response => {
      console.log(response.data.profiles)
      this.setState({
        loading: false,
        profiles: response.data.profiles
      })
    })

    // axios.get('/api/trips').then(response => {
    //   console.log(response.data)
    // })
  }

  renderLoading = () => {
    return <div>LOADING</div>
  }

  renderProfiles = () => {
    return (
      <>
        <p>We found {this.state.profiles.length} locals in your travel destinations!</p>

        {this.state.profiles.map((profile, index) => {
          return (
            <Local
              key={index}
              id={profile.id}
              data-id={profile.id}
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
            <Link to="/browse/">Browse</Link> <Link to="/profiles/user/">My Profile</Link>
            <Link to="/logout">Sign Out</Link>
            <div className="hamburger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </nav> */}

        <NavBar />

        <main className="browse-background">
          {this.state.loading ? this.renderLoading() : this.renderProfiles()}
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
        </main>
      </>
    )
  }
}
// map over profiles in state
// for each profile, return a 'Local' component
// pass all the properties down as props to the Local component
export default observer(Browse)
