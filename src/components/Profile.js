import React, { Component } from 'react'

export default class Profile extends Component {

  render() {
    const {public_repos, followers, following, name, email, location} = this.props

    return (
      <div className="row">
        <div className="col-md-12">
          <span className="label label-primary">{public_repos} Public Repos</span>
          <span className="label label-info">{followers} Followers</span>
          <span className="label label-danger">{following} Following</span>
        </div>
        <div className="col-md-12">
          <ul className="list-group">
            <li className="list-group-item"><strong>Name: {name}</strong></li>
            <li className="list-group-item"><strong>Email: {email}</strong></li>
            <li className="list-group-item"><strong>Location: {location}</strong></li>
          </ul>
        </div>
      </div>
    )
  }
}
