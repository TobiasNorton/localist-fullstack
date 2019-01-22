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

    axios.delete(`/api/links/${this.props.id}`).then(
      response => {
        this.props.reloadMyProfile()
      },
      () => {
        this.setState({
          deleting: false
        })
      }
    )
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
            <p>You are linked with {this.firstName()}.</p>
            {/* <p>Available: {dataStore.theirAvailability()}</p> */}
            <div classname="local-buttons-container">
              <Link to={`/profiles/${this.props.id}`}>
                <button className="button">View Profile</button>
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
