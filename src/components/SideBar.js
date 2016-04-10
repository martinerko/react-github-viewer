import React, { Component } from 'react'
import { GET_USER_PROFILE, GET_COMMITS, GET_REPOSITORIES } from '../constants/ActionTypes'

export default class SideBar extends Component {

  getUserProfile(e) {
    const {login} = this.props;
    e.preventDefault();

    this.props.showLoader(login);
    this.props.getUserProfile(login);
  }

  getRepositories(e) {
    const {login} = this.props;
    e.preventDefault();

    this.props.showLoader(login);
    this.props.getRepositories(login);
  }

  getCommits(e) {
    const {login} = this.props;
    e.preventDefault();

    this.props.showLoader(login);
    this.props.getCommits(login);
  }

  resolveActiveLink() {
    let [activeRepositories, activeCommits, activeOverwiew] = 'list-group-item '.repeat(3).trim().split(' ')

    switch (this.props.type) {
      case GET_REPOSITORIES:
        activeRepositories += ' active'
        break;
      case GET_COMMITS:
        activeCommits += ' active'
        break;
      default:
        activeOverwiew += ' active'
        break;
    }

    return {
      activeRepositories,
      activeCommits,
      activeOverwiew
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
    const {activeOverwiew, activeRepositories, activeCommits} = this.resolveActiveLink()

    return (
      <div className="list-group">
        <a href="#" className={activeOverwiew} onClick={event => this.getUserProfile(event)}>Overview</a>
        <a href="#" className={activeRepositories} onClick={event => this.getRepositories(event)}>Repositories</a>
        <a href="#" className={activeCommits} onClick={event => this.getCommits(event)}>Commits</a>
      </div>
      );
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
      );
  }
}
