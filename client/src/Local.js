import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import dataStore from './DataStore'

class Local extends Component {
  checkTheID = event => {
    // console.log(this.props.id)
  }

  render() {
    return (
      <div>
        <div className="local">
          <section>
            <img src={this.props.picture} className="mini-pic" />
          </section>
          <section className="right-half">
            <p>{this.props.name}</p>
            <p>{this.props.location}</p>
            {/* <p>Available: {dataStore.theirAvailability()}</p> */}
            <div>
              <Link to={`/profiles/${this.props.id}`}>View Profile</Link>
              <button onClick={this.checkTheID}>Request</button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default observer(Local)
