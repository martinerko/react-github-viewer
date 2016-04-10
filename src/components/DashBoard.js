import React, { Component } from 'react'
import { GET_USER_PROFILE, GET_COMMITS, GET_REPOSITORIES } from '../constants/ActionTypes'
import Profile from './Profile'
import Repositories from './Repositories'
import Commits from './Commits'

export default class DashBoard extends Component {

  renderProfile() {
    return (
      <Profile {...this.props.data} />
    )
  }

  renderError() {
    return (<div>There was an error while getting profile ({this.props.errorMessage})</div>);
  }

  renderAdditionalContent() {
    const {loading, actions, login, error, type, data} = this.props

    if (loading) {
      return (<div>Loading...</div>);
    }

    switch (type) {
      case GET_REPOSITORIES:
        return <Repositories data={data.repositories} />
      case GET_COMMITS:
        return <Commits data={data.commits} />
    }
    return null
  }


  render() {
    const {error, login} = this.props
    const title = login ? `${login}'s profile` : ''
    const content = this[error ? 'renderError' : 'renderProfile']()

    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div className="jumbotron">
            <h1>{title}</h1>
            { content }
          </div>
          <div className="row placeholders">
            { this.renderAdditionalContent() }
          </div>
      </div>
    )
  }
}
