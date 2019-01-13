import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { observer } from 'mobx-react'
import dataStore from './DataStore'

class AllSet extends Component {
  passDataStoreAProfileID = () => {
    dataStore.getProfile(1)
  }

  render() {
    return (
      <div>
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
            <a href="#">Browse</a> <a href="#">My Profile</a>
            <a href="#">Sign Out</a> <a href="#" />
            <div className="hamburger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </nav>
        <section className="all-set">
          <div className="account-ready">
            <h2>You're All Set!</h2>
            <h3>Now for the fun part:</h3>
            <p>
              Based on your upcoming trips, Localist has provided you with a list of locals that are
              available in your destinations during the time that you will be visiting. You may
              either go to your profile or start looking for locals to link with.
            </p>
            <p>
              When you are scrolling through locals, you may request to link with someone, or view
              their profile. If you request someone, they will be notified of your request and can
              either accept or deny. If they accept, your contact information will become visible to
              them and theirs will be visible to you.
            </p>
            <div className="get-started-buttons">
              <Link to="/browse/">
                <button>Look for Locals</button>
              </Link>
              <Link to="/profiles/user/:id">
                <button onClick={this.passDataStoreAProfileID}>Go To My Profile</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default observer(AllSet)
