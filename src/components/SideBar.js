import React, { Component } from 'react'
import { GET_USER_PROFILE, GET_PR, GET_COMMITS, GET_REPOSITORIES, GET_ISSUES } from '../constants/ActionTypes'

export default class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  getRepositories(e) {
    e.preventDefault();
    this.props.getRepositories(this.props.login);
  }

  getCommits(e) {
    e.preventDefault();
    this.props.getCommits(this.props.login);
  }

  getPullRequests(e) {
    e.preventDefault();
    this.props.getPullRequests(this.props.login);
  }

  getIssues(e) {
    e.preventDefault();
    this.props.getIssues(this.props.login);
  }

  resolveActiveLink() {
    let [activeRepositories, activePullRequests, activeCommits, activeIssues, activeOverwiew] = 'list-group-item '.repeat(5).trim().split(' ')

    switch (this.props.type) {
      case GET_PR:
        activePullRequests += ' active'
        break;
      case GET_REPOSITORIES:
        activeRepositories += ' active'
        break;
      case GET_COMMITS:
        activeCommits += ' active'
        break;
      case GET_ISSUES:
        activeIssues += ' active'
        break;
      default:
        activeOverwiew += ' active'
        break;
    }

    return {
      activePullRequests,
      activeRepositories,
      activeCommits,
      activeIssues,
      activeOverwiew
    }
  }

  renderProfileCard() {
    return (
      <div className="text-xs-center">
        <img src={this.props.data.avatar_url} className="thumbnail" style={{
        width: "100%"
      }}/>
        <p className="card-text">
        {this.props.data.name}
        </p>
      </div>
      );
  }

  renderMenu() {
    const {activeOverwiew, activeRepositories, activeCommits, activePullRequests, activeIssues} = this.resolveActiveLink()

    return (
      <div className="list-group">
        <a href="#" className={activeOverwiew}>Overview</a>
        <a href="#" className={activeRepositories} onClick={event => this.getRepositories(event)}>Repositories</a>
        <a href="#" className={activeCommits} onClick={event => this.getCommits(event)}>Commits</a>
        <a href="#" className={activePullRequests} onClick={event => this.getPullRequests(event)}>Pull Requests</a>
        <a href="#" className={activeIssues} onClick={event => this.getIssues(event)}>Issues</a>
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
