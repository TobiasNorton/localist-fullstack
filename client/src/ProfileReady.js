import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { observer } from 'mobx-react'

import NavBar from './NavBar'

class ProfileReady extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <section className="all-set">
          <div className="account-ready">
            <h2>You're All Set!</h2>
            <div className="line" />
            <h3>Now for the fun part:</h3>
            <p className="all-set-p">
              Based on your upcoming trips, Localist has provided you with a list of locals that are
              available in your destinations during the time that you will be visiting. You may
              either go to your profile or start looking for locals to link with.
            </p>
            <p className="all-set-p">
              When you are scrolling through locals, you may either link with someone or view their
              profile. If you decide to link with someone, they will appear in your profile under
              the "My Links" tab. At this time your contact information will become visible to them
              and theirs will be visible to you.
              {/* When you are scrolling through locals, you may request to link with someone, or view
              their profile. If you request someone, they will be notified of your request and can
              either accept or deny. If they accept, your contact information will become visible to
              them and theirs will be visible to you. */}
            </p>
            <div className="get-started-buttons">
              <Link to="/browse/">
                <button>Look for Locals</button>
              </Link>
              <Link to="/my_profile/">
                <button>My Profile</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default observer(ProfileReady)
