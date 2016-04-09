import React, { Component } from 'react'
import { GET_USER_PROFILE, GET_PR, GET_COMMITS, GET_REPOSITORIES } from '../constants/ActionTypes'
import Repositories from './Repositories'

export default class DashBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    };
  }

  renderProfile() {
    const {data} = this.props

    return (
      <div className="row">
        <div className="col-md-12">
          <span className="label label-primary">{data.public_repos} Public Repos</span>
          <span className="label label-info">{data.followers} Followers</span>
          <span className="label label-danger">{data.following} Following</span>
        </div>
        <div className="col-md-12">
          <ul className="list-group">
            <li className="list-group-item"><strong>Name: {data.name}</strong></li>
            <li className="list-group-item"><strong>Email: {data.email}</strong></li>
            <li className="list-group-item"><strong>Location: {data.location}</strong></li>
          </ul>
        </div>
      </div>
    )
  }


  renderError() {
    return (<div>There was an error while getting profile ({this.props.errorMessage})</div>);
  }

  render() {
    const {login, error, type, data} = this.props
    const title = login ? `${login}'s profile` : ''

    const content = this[error ? 'renderError' : 'renderProfile']()
    let additionalContent = null

    switch (type) {
      case GET_REPOSITORIES:
        additionalContent = <Repositories repositories={data.repositories} />
        break
      default:
        break
    }

    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div className="jumbotron">
            <h1>{title}</h1>
            { content }
          </div>
          <div className="row placeholders">
            { additionalContent }
          </div>
      </div>
      );
  }
}
