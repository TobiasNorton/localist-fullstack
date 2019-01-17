import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class MyLink extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deleting: false
    }
  }

  deleteLink = event => {
    this.setState({ deleting: true })

    axios.delete(`/api/links/${this.props.id}`).then(response => {
      this.props.reloadMyProfile()
    })
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
            <p>You are linked with {this.props.firstName}.</p>
            {/* <p>Available: {dataStore.theirAvailability()}</p> */}
            <div>
              <Link to={`/profiles/${this.props.id}`} className="button">
                View Profile
              </Link>
              <button onClick={this.deleteLink}>
                {this.state.deleting ? 'Deleting...' : 'Unlink'}
              </button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default MyLink
