import React, { Component } from 'react'
import { GET_USER_PROFILE, GET_COMMITS, GET_REPOSITORIES } from '../constants/ActionTypes'

export default class SideBar extends Component {

  fireMenuAction(type, e) {
    const {login} = this.props
    e.preventDefault()
    this.props.showLoader(login)

    switch (type) {
      case GET_USER_PROFILE:
        return this.props.getUserProfile(login)
      case GET_REPOSITORIES:
        return this.props.getRepositories(login)
      case GET_COMMITS:
        return this.props.getCommits(login)
      default:
        return
    }
  }

  resolveActiveLink() {
    let [activeRepositories, activeCommits, activeOverview] = 'list-group-item '.repeat(3).trim().split(' ')

    switch (this.props.type) {
      case GET_REPOSITORIES:
        activeRepositories += ' active'
        break;
      case GET_COMMITS:
        activeCommits += ' active'
        break;
      default:
        activeOverview += ' active'
        break;
    }

    return {
      activeRepositories,
      activeCommits,
      activeOverview
    }
  }

  renderProfileCard() {
    return (
      <div className="text-xs-center">
        <img src={this.props.data.avatar_url} className="thumbnail" style={{
        width: '100%'
      }}/>
        <p className="card-text">
        {this.props.data.name}
        </p>
      </div>
      );
  }

  renderMenu() {
    const {activeOverview, activeRepositories, activeCommits} = this.resolveActiveLink()

    return (
      <div className="list-group">
        <a href="#" className={activeOverview} onClick={this.fireMenuAction.bind(this, GET_USER_PROFILE)}>Overview</a>
        <a href="#" className={activeRepositories} onClick={this.fireMenuAction.bind(this, GET_REPOSITORIES)}>Repositories</a>
        <a href="#" className={activeCommits} onClick={this.fireMenuAction.bind(this, GET_COMMITS)}>Commits</a>
      </div>
    )
  }

  render() {
    let card = null
    let menu = null

    if (!this.props.error) {
      card = this.renderProfileCard()
      menu = this.renderMenu()
    }

    return (
      <div className="col-sm-3 col-md-2 sidebar">
          { card }
          { menu }
      </div>
    )
  }
}
