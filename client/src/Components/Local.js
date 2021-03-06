import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import axios from 'axios'

class Local extends Component {
  constructor(props) {
    super(props)

    this.state = {
      linking: false
    }
  }

  createLink = event => {
    this.setState({
      linking: true
    })

    axios.post('/api/links', { other_profile_id: this.props.id }).then(response => {
      // Add trip ID as a second argument when doing this to link 'links' to 'trips'
      // code here when the promise is done
      this.props.reloadMyProfile()
    })
    // code here happens right away
  }

  firstName = () => {
    let name = this.props.name
    return name.split(' ').shift()
  }

  render() {
    return (
      <div>
        <div className="local">
          <section>
            <img src={this.props.picture} className="mini-pic" />
          </section>
          <section className="right-half">
            <p className="name">{this.props.name}</p>
            <p>{this.props.location}</p>
            <p>You are not linked with {this.firstName()}.</p>
            <div className="local-buttons-container">
              <Link to={`/profiles/${this.props.id}`}>
                <button className="button">View Profile</button>
              </Link>
              <button onClick={this.createLink}>
                {this.state.linking ? 'Linking...' : 'Link'}
              </button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default observer(Local)
