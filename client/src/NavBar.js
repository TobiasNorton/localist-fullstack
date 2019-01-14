import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { observer } from 'mobx-react'

// import dataStore from './DataStore'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <p className="logo">Localist</p>
        <div className="links">
          <div className="dropdown">
            {/* <a href="#" className="dropdown-button">
                Requests (4)
              </a>
              <div className="request-list hidden">
                <a href="#">Michael Kelly</a>
                <a href="#">Brenna Hensley</a>
                <a href="#">Francis Begby</a>
                <a href="#">Budsarin Hiranprueck</a>
              </div> */}
          </div>
          <Link to="/browse/">Browse</Link>
          <Link to="/profiles/user/">My Profile</Link>
          <Link to="/logout">Sign Out</Link>
          {/* <div className="hamburger">
              <span />
              <span />
              <span />
            </div> */}
        </div>
      </nav>
    )
  }
}

export default observer(NavBar)
