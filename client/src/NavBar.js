import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { observer } from 'mobx-react'

import { slide as Menu } from 'react-burger-menu'

// import dataStore from './DataStore'

class NavBar extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <>
        <Menu right>
          <Link id="home" className="menu-item" to="/browse/">
            Browse
          </Link>
          <Link id="about" className="menu-item" to="/profiles/user/:id">
            My Profile
          </Link>
          <Link id="contact" className="menu-item" to="/logout">
            Sign Out
          </Link>
          {/* <Link onClick={this.showSettings} className="menu-item--small" href="">
        Settings
      </Link> */}
        </Menu>
        <nav className="nav-bar">
          <p className="logo">Localist</p>
          <div className="links">
            {/* <div className="dropdown">
            <a href="#" className="dropdown-button">
                Requests (4)
              </a>
              <div className="request-list hidden">
                <a href="#">Michael Kelly</a>
                <a href="#">Brenna Hensley</a>
                <a href="#">Francis Begby</a>
                <a href="#">Budsarin Hiranprueck</a>
              </div>
          </div> */}

            <Link to="/browse/" className="">
              Browse
            </Link>
            <Link to="/profiles/user/" className="">
              My Profile
            </Link>
            <Link to="/logout" className="">
              Sign Out
            </Link>
            {/* <div className="hamburger">
              <span />
              <span />
              <span />
            </div> */}
          </div>
          {/* <Menu>
        <a id="home" className="menu-item" href="/">Browse</a>
        <a id="about" className="menu-item" href="/about">My Profile</a>
        <a id="contact" className="menu-item" href="/contact">Sign Out</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu> */}
        </nav>
      </>
    )
  }
}

export default observer(NavBar)
