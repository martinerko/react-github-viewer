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

  renderMainContent() {
    return this.props.error ? this.renderError() : this.renderProfile()
  }

  renderAdditionalContent() {
    const {loading, type, data} = this.props

    if (loading) {
      return (
        <div>Loading...</div>
      )
    }

    switch (type) {
      case GET_REPOSITORIES:
        return <Repositories data={data.repositories} />
      case GET_COMMITS:
        const commitsMap = data.commits
        return Object.keys(commitsMap).sort().reverse().map(year => <Commits key={year} data={commitsMap[year]} year={year} />);
      default:
        return null
    }
  }

  render() {
    const {login} = this.props
    const title = login ? `${login}'s profile` : ''

    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <div className="row jumbotron">
          <h1>{title}</h1>
          {this.renderMainContent()}
        </div>
        <div className="row placeholders">
          {this.renderAdditionalContent()}
        </div>
      </div>
    )
  }
}
